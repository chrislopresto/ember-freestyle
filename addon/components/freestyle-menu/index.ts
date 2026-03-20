import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reads } from 'macro-decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type RouterService from '@ember/routing/router-service';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { type Section, type Subsection } from '../../services/ember-freestyle';
import { TrackedArray, TrackedSet } from 'tracked-built-ins';

export interface FilteredSubsection {
  name: string;
  flatIndex: number;
  isHighlighted: boolean;
}

export interface FilteredSection {
  section: Section;
  subsections: FilteredSubsection[];
  isExpanded: boolean;
}

interface FlatSubsectionItem {
  sectionName: string;
  subsectionName: string;
}

interface Signature {
  Args: {
    includeAllOption?: boolean;
  };
}

export default class FreestyleMenu extends Component<Signature> {
  @service declare emberFreestyle: EmberFreestyleService;
  @service declare router: RouterService;
  @reads('args.includeAllOption', true) declare includeAllOption: boolean;
  @reads('emberFreestyle.menu') declare menu: TrackedArray<Section>;

  expandedSections = new TrackedSet<string>();
  @tracked filterText = '';
  @tracked highlightedIndex = -1;

  get isFiltering(): boolean {
    return this.filterText.length > 0;
  }

  get activeDescendantId(): string | undefined {
    if (this.highlightedIndex >= 0) {
      return `freestyle-menu-item-${this.highlightedIndex}`;
    }
    return undefined;
  }

  get filteredMenu(): FilteredSection[] {
    const filter = this.filterText.toLowerCase();
    let flatIndex = 0;

    return this.menu
      .map((section: Section) => {
        let matchingSubs: Subsection[];
        let isExpanded: boolean;

        if (!filter) {
          matchingSubs = section.subsections;
          isExpanded = this.isSectionExpanded(section.name);
        } else {
          const sectionMatches = section.name.toLowerCase().includes(filter);
          matchingSubs = sectionMatches
            ? section.subsections
            : section.subsections.filter((sub: Subsection) =>
                sub.name.toLowerCase().includes(filter),
              );

          if (!sectionMatches && matchingSubs.length === 0) {
            return null;
          }
          isExpanded = true;
        }

        const enrichedSubs = isExpanded
          ? matchingSubs.map((sub: Subsection) => {
              const idx = flatIndex++;
              return {
                name: sub.name,
                flatIndex: idx,
                isHighlighted: idx === this.highlightedIndex,
              };
            })
          : matchingSubs.map((sub: Subsection) => ({
              name: sub.name,
              flatIndex: -1,
              isHighlighted: false,
            }));

        return {
          section,
          subsections: enrichedSubs,
          isExpanded,
        };
      })
      .filter(Boolean) as FilteredSection[];
  }

  get flatSubsectionItems(): FlatSubsectionItem[] {
    const items: FlatSubsectionItem[] = [];
    for (const entry of this.filteredMenu) {
      if (entry.isExpanded) {
        for (const sub of entry.subsections) {
          items.push({
            sectionName: entry.section.name,
            subsectionName: sub.name,
          });
        }
      }
    }
    return items;
  }

  isSectionExpanded(sectionName: string): boolean {
    const currentSection = this.emberFreestyle.section;
    if (currentSection && currentSection === sectionName) {
      return true;
    }
    return this.expandedSections.has(sectionName);
  }

  @action
  onFilterInput(event: Event): void {
    this.filterText = (event.target as HTMLInputElement).value;
    this.highlightedIndex = -1;
  }

  @action
  handleKeydown(event: KeyboardEvent): void {
    const items = this.flatSubsectionItems;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.highlightedIndex < items.length - 1) {
        this.highlightedIndex++;
        this.scrollHighlightedIntoView();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
        this.scrollHighlightedIntoView();
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.navigateToHighlighted();
    } else if (event.key === 'Escape') {
      this.filterText = '';
      this.highlightedIndex = -1;
      const input = event.target as HTMLInputElement;
      if (input.tagName === 'INPUT') {
        input.value = '';
      }
    }
  }

  navigateToHighlighted(): void {
    const items = this.flatSubsectionItems;
    if (this.highlightedIndex < 0 || this.highlightedIndex >= items.length) {
      return;
    }
    const item = items[this.highlightedIndex];
    if (!item) return;

    this.expandedSections.add(item.sectionName);
    this.router.transitionTo({
      queryParams: {
        f: null,
        s: item.sectionName,
        ss: item.subsectionName,
      },
    });
  }

  scrollHighlightedIntoView(): void {
    const el = document.getElementById(
      `freestyle-menu-item-${this.highlightedIndex}`,
    );
    if (el) {
      el.scrollIntoView({ block: 'nearest' });
    }
  }

  @action
  toggleSection(sectionName: string): void {
    if (this.expandedSections.has(sectionName)) {
      this.expandedSections.delete(sectionName);
    } else {
      this.expandedSections.add(sectionName);
    }
  }

  @action
  expandSection(sectionName: string): void {
    this.expandedSections.add(sectionName);
  }

  @action
  expandAllSections(): void {
    for (const section of this.menu) {
      this.expandedSections.add(section.name);
    }
  }
}
