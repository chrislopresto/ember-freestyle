import { inject as service } from '@ember/service';
import { reads } from 'macro-decorators';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isBlank } from '@ember/utils';
export default class FreestyleGuide extends Component {
  @service emberFreestyle;

  constructor() {
    super(...arguments);
    if (this.args.highlightJsTheme) {
      this.highlightJsTheme = this.args.highlightJsTheme;
    }
  }

  get highlightJsTheme() {
    return this.emberFreestyle.defaultTheme;
  }
  set highlightJsTheme(val) {
    this.emberFreestyle.set('defaultTheme', val);
  }
  @reads('emberFreestyle.allowRenderingAllSections', true)
  allowRenderingAllSections;

  get isSectionSelected() {
    return !isBlank(this.emberFreestyle.section);
  }

  @reads('emberFreestyle.showMenu') showMenu;
  @tracked showAside = false;

  @action
  toggleNav() {
    this.emberFreestyle.set('showMenu', !this.showMenu);
  }

  @action
  toggleAside() {
    this.showAside = !this.showAside;
  }
}
