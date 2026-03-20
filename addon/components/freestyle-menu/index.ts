import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reads } from 'macro-decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { type Section } from '../../services/ember-freestyle';
import { TrackedArray, TrackedSet } from 'tracked-built-ins';

export interface FilteredSection {
  section: Section;
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

  get filteredMenu(): FilteredSection[] {
    return this.menu.map((section: Section) => ({
      section,
      isExpanded: this.isSectionExpanded(section.name),
    }));
  }

  isSectionExpanded(sectionName: string): boolean {
    const currentSection = this.emberFreestyle.section;
    if (currentSection && currentSection === sectionName) {
      return true;
    }
    return this.expandedSections.has(sectionName);
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
