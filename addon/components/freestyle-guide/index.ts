import Component from '@glimmer/component';
import type EmberFreestyleService from '../../services/ember-freestyle';
import Owner from '@ember/owner';
import { isBlank } from '@ember/utils';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { service } from '@ember/service';
import { reads } from 'macro-decorators';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface ComponentArgs {
  highlightJsTheme?: unknown;
  title?: string;
  subtitle?: string;
}

interface Signature {
  Element: HTMLDivElement;
  Args: ComponentArgs;
  Blocks: {
    default: [];
  };
}

export default class FreestyleGuide extends Component<Signature> {
  @service declare emberFreestyle: EmberFreestyleService;

  constructor(owner: Owner, args: ComponentArgs) {
    super(owner, args);
    if (this.args.highlightJsTheme) {
      this.highlightJsTheme = this.args.highlightJsTheme;
    }
  }

  get highlightJsTheme(): unknown {
    return this.emberFreestyle.defaultTheme;
  }

  set highlightJsTheme(val: unknown) {
    this.emberFreestyle.set('defaultTheme', val);
  }

  @reads('emberFreestyle.allowRenderingAllSections', true)
  declare allowRenderingAllSections: boolean;

  get isSectionSelected(): boolean {
    return !isBlank(this.emberFreestyle.section);
  }

  @reads('emberFreestyle.showMenu') declare showMenu: boolean;
  @tracked showAside = false;

  @action
  toggleNav(): void {
    this.emberFreestyle.set('showMenu', !this.showMenu);
  }

  @action
  toggleAside(): void {
    this.showAside = !this.showAside;
  }
}
