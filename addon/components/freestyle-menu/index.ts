import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reads } from 'macro-decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';
import { tracked, cached } from '@glimmer/tracking';
import { schedule } from '@ember/runloop';
import { guidFor } from '@ember/object/internals';
import type RouterService from '@ember/routing/router-service';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { type Section, type Subsection } from '../../services/ember-freestyle';
import { TrackedArray, TrackedSet } from 'tracked-built-ins';

export interface FilteredSubsection {
  name: string;
  flatIndex: number;
  isHighlighted: boolean;
  isActive: boolean;
}

export interface FilteredSection {
  section: Section;
  subsections: FilteredSubsection[];
  isExpanded: boolean;
  isSectionActive: boolean;
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
  userCollapsedSections = new TrackedSet<string>();
  @tracked filterText = '';
  @tracked highlightedIndex = -1;

  /** Stable prefix for element IDs to avoid collisions */
  elementIdPrefix = `freestyle-menu-${guidFor(this)}`;

  get isFiltering(): boolean {
    return this.filterText.length > 0;
  }

  get activeDescendantId(): string | undefined {
    if (this.highlightedIndex >= 0) {
      return `${this.elementIdPrefix}-item-${this.highlightedIndex}`;
    }
    return undefined;
  }

  @cached
  get filteredMenu(): FilteredSection[] {
    const filter = this.filterText.toLowerCase();
    const spySection = this.emberFreestyle.scrollSpySection;
    const spySubsection = this.emberFreestyle.scrollSpySubsection;
    const hasKeyboardHighlight = this.highlightedIndex >= 0;
    let flatIndex = 0;

    const result = this.menu
      .map((section: Section) => {
        let matchingSubs: Subsection[];
        let isExpanded: boolean;

        if (!filter) {
          matchingSubs = section.subsections;
          isExpanded = this.isSectionExpanded(section.name);

          // Auto-expand when scroll spy points at this section,
          // unless user explicitly collapsed it during this scroll-spy pass
          if (
            !isExpanded &&
            spySection === section.name &&
            !hasKeyboardHighlight &&
            matchingSubs.length > 0 &&
            !this.userCollapsedSections.has(section.name)
          ) {
            isExpanded = true;
          }
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
              const isScrollSpyActive =
                !hasKeyboardHighlight &&
                spySection === section.name &&
                spySubsection === sub.name;
              return {
                name: sub.name,
                flatIndex: idx,
                isHighlighted: idx === this.highlightedIndex,
                isActive: isScrollSpyActive,
              };
            })
          : matchingSubs.map((sub: Subsection) => ({
              name: sub.name,
              flatIndex: -1,
              isHighlighted: false,
              isActive: false,
            }));

        const isSectionActive =
          !hasKeyboardHighlight && spySection === section.name;

        return {
          section,
          subsections: enrichedSubs,
          isExpanded,
          isSectionActive,
        };
      })
      .filter(Boolean) as FilteredSection[];

    // Clean up collapsed overrides for sections no longer pointed at by scroll spy
    if (spySection) {
      for (const name of this.userCollapsedSections) {
        if (name !== spySection) {
          schedule('afterRender', () =>
            this.userCollapsedSections.delete(name),
          );
        }
      }
      // Auto-scroll sidebar to keep the active item visible
      schedule('afterRender', this, this.scrollActiveItemIntoView);
    }

    return result;
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
        schedule('afterRender', this, this.scrollHighlightedIntoView);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
        schedule('afterRender', this, this.scrollHighlightedIntoView);
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.navigateToHighlighted();
    } else if (event.key === 'Escape') {
      this.filterText = '';
      this.highlightedIndex = -1;
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

    // Scroll the content area to the target subsection after navigation renders
    schedule('afterRender', null, () => {
      const target = document.querySelector(
        `.FreestyleSubsection[data-section="${item.sectionName}"][data-subsection="${item.subsectionName}"]`,
      );
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  scrollHighlightedIntoView(): void {
    const el = document.getElementById(
      `${this.elementIdPrefix}-item-${this.highlightedIndex}`,
    );
    if (el) {
      el.scrollIntoView({ block: 'nearest' });
    }
  }

  scrollActiveItemIntoView(): void {
    const activeEl = document.querySelector(
      '.FreestyleMenu-submenuItem.is-active',
    );
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }

  @action
  toggleSection(sectionName: string): void {
    if (this.expandedSections.has(sectionName)) {
      this.expandedSections.delete(sectionName);
      this.userCollapsedSections.add(sectionName);
    } else {
      this.expandedSections.add(sectionName);
      this.userCollapsedSections.delete(sectionName);
    }
  }

  @action
  expandSection(sectionName: string): void {
    this.expandedSections.add(sectionName);
    this.userCollapsedSections.delete(sectionName);
  }

  @action
  expandAllSections(): void {
    this.userCollapsedSections.clear();
    for (const section of this.menu) {
      this.expandedSections.add(section.name);
    }
  }

}
