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

// ── Types ──────────────────────────────────────────────────────────────────

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

// ── DOM helpers ────────────────────────────────────────────────────────────

function subsectionSelector(
  sectionName: string,
  subsectionName: string,
): string {
  return `.FreestyleSubsection[data-section="${sectionName}"][data-subsection="${subsectionName}"]`;
}

function scrollElementIntoView(
  el: Element | null,
  behavior: ScrollBehavior = 'auto',
  block: ScrollLogicalPosition = 'nearest',
): void {
  if (el) {
    el.scrollIntoView({ behavior, block });
  }
}

// ── Component ──────────────────────────────────────────────────────────────

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

  // ── Derived state ──────────────────────────────────────────────────────

  get isFiltering(): boolean {
    return this.filterText.length > 0;
  }

  get activeDescendantId(): string | undefined {
    if (this.highlightedIndex >= 0) {
      return `${this.elementIdPrefix}-item-${this.highlightedIndex}`;
    }
    return undefined;
  }

  /**
   * Sections filtered by search text, with expansion state resolved.
   * Does NOT include highlight/active enrichment — that's in `filteredMenu`.
   */
  @cached
  get visibleSections(): {
    section: Section;
    subsections: Subsection[];
    isExpanded: boolean;
  }[] {
    const filter = this.filterText.toLowerCase();
    const spySection = this.emberFreestyle.scrollSpySection;
    const hasKeyboardHighlight = this.highlightedIndex >= 0;

    return this.menu
      .map((section: Section) => {
        if (!filter) {
          let isExpanded = this.isSectionExpanded(section.name);

          if (
            !isExpanded &&
            spySection === section.name &&
            !hasKeyboardHighlight &&
            section.subsections.length > 0 &&
            !this.userCollapsedSections.has(section.name)
          ) {
            isExpanded = true;
          }

          return {
            section,
            subsections: section.subsections,
            isExpanded,
          };
        }

        const sectionMatches = section.name.toLowerCase().includes(filter);
        const matchingSubs = sectionMatches
          ? section.subsections
          : section.subsections.filter((sub: Subsection) =>
              sub.name.toLowerCase().includes(filter),
            );

        if (!sectionMatches && matchingSubs.length === 0) {
          return null;
        }

        return { section, subsections: matchingSubs, isExpanded: true };
      })
      .filter(Boolean) as {
      section: Section;
      subsections: Subsection[];
      isExpanded: boolean;
    }[];
  }

  /**
   * Enriches `visibleSections` with highlight/active state and flat indices
   * for keyboard navigation and scroll spy. Also schedules sidebar
   * auto-scroll when scroll spy is active.
   */
  get filteredMenu(): FilteredSection[] {
    const spySection = this.emberFreestyle.scrollSpySection;
    const spySubsection = this.emberFreestyle.scrollSpySubsection;
    const hasKeyboardHighlight = this.highlightedIndex >= 0;
    let flatIndex = 0;

    const result = this.visibleSections.map(
      ({ section, subsections, isExpanded }) => {
        const enrichedSubs = isExpanded
          ? subsections.map((sub: Subsection) => {
              const idx = flatIndex++;
              return {
                name: sub.name,
                flatIndex: idx,
                isHighlighted: idx === this.highlightedIndex,
                isActive:
                  !hasKeyboardHighlight &&
                  spySection === section.name &&
                  spySubsection === sub.name,
              };
            })
          : subsections.map((sub: Subsection) => ({
              name: sub.name,
              flatIndex: -1,
              isHighlighted: false,
              isActive: false,
            }));

        return {
          section,
          subsections: enrichedSubs,
          isExpanded,
          isSectionActive: !hasKeyboardHighlight && spySection === section.name,
        };
      },
    );

    // Clean up collapsed overrides for sections no longer in scroll spy
    if (spySection) {
      for (const name of this.userCollapsedSections) {
        if (name !== spySection) {
          schedule('afterRender', () =>
            this.userCollapsedSections.delete(name),
          );
        }
      }
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

  // ── Actions ────────────────────────────────────────────────────────────

  @action
  onFilterInput(event: Event): void {
    this.filterText = (event.target as HTMLInputElement).value;
    this.highlightedIndex = -1;
  }

  @action
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.moveHighlight(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.moveHighlight(-1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.navigateToHighlighted();
    } else if (event.key === 'Escape') {
      this.filterText = '';
      this.highlightedIndex = -1;
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

  // ── Navigation ─────────────────────────────────────────────────────────

  moveHighlight(direction: 1 | -1): void {
    const items = this.flatSubsectionItems;
    const nextIndex = this.highlightedIndex + direction;

    if (nextIndex < 0 || nextIndex >= items.length) return;

    this.highlightedIndex = nextIndex;
    schedule('afterRender', this, this.scrollHighlightedIntoView);

    const item = items[nextIndex];
    if (item) {
      this.scrollToSubsection(item.sectionName, item.subsectionName);
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

    schedule('afterRender', () =>
      this.scrollToSubsection(item.sectionName, item.subsectionName),
    );
  }

  // ── Scroll helpers ─────────────────────────────────────────────────────

  scrollToSubsection(sectionName: string, subsectionName: string): void {
    const el = document.querySelector(
      subsectionSelector(sectionName, subsectionName),
    );
    scrollElementIntoView(el, 'smooth', 'start');
  }

  scrollHighlightedIntoView(): void {
    const el = document.getElementById(
      `${this.elementIdPrefix}-item-${this.highlightedIndex}`,
    );
    scrollElementIntoView(el);
  }

  scrollActiveItemIntoView(): void {
    scrollElementIntoView(
      document.querySelector('.FreestyleMenu-submenuItem.is-active'),
    );
  }
}
