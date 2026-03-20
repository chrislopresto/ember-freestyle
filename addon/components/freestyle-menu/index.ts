import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reads } from 'macro-decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { type Section, type Subsection } from '../../services/ember-freestyle';
import { TrackedArray, TrackedSet } from 'tracked-built-ins';

export interface FilteredSubsection {
  name: string;
}

export interface FilteredSection {
  section: Section;
  subsections: FilteredSubsection[];
  isExpanded: boolean;
}

interface Signature {
  Args: {
    includeAllOption?: boolean;
  };
}

export default class FreestyleMenu extends Component<Signature> {
  @service declare emberFreestyle: EmberFreestyleService;
  @reads('args.includeAllOption', true) declare includeAllOption: boolean;
  @reads('emberFreestyle.menu') declare menu: TrackedArray<Section>;

  expandedSections = new TrackedSet<string>();
  @tracked filterText = '';

  get isFiltering(): boolean {
    return this.filterText.length > 0;
  }

  get filteredMenu(): FilteredSection[] {
    const filter = this.filterText.toLowerCase();

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

        return {
          section,
          subsections: matchingSubs,
          isExpanded,
        };
      })
      .filter(Boolean) as FilteredSection[];
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
