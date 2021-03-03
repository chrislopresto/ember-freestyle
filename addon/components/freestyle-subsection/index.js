/* eslint-disable ember/no-component-lifecycle-hooks */
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class FreestyleSubsection extends Component {
  @service emberFreestyle;
  get show() {
    return this.emberFreestyle.shouldShowSubsection(
      this.args.section,
      this.args.name
    );
  }
}
