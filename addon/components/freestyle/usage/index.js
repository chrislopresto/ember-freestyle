import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class extends Component {
  @service('ember-freestyle') emberFreestyle;
  get showName() {
    return this.emberFreestyle.showLabels && this.args.name;
  }
  get showNotes() {
    return this.emberFreestyle.showNotes;
  }
  get showSource() {
    return this.args.source && this.emberFreestyle.showCode;
  }
  get showApi() {
    return this.emberFreestyle.showApi;
  }
  get show() {
    let {
      effectiveSlug,
      emberFreestyle: { focus },
    } = this;

    if (effectiveSlug && focus) {
      return effectiveSlug.match(focus);
    } else {
      return true;
    }
  }

  get effectiveSlug() {
    return this.args.slug || this.args.name;
  }

  get computedTheme() {
    return this.args.highlightJsTheme || this.emberFreestyle.defaultTheme;
  }

  @action highlightSource() {
    this.emberFreestyle.ensureHljsTheme(this.computedTheme);
  }

  @action setFocus() {
    this.emberFreestyle.focus = this.effectiveSlug;
  }
}
