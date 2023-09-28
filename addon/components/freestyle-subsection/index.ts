import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
import EmberFreestyleService from '../../services/ember-freestyle';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    section: string;
    name: string;
  };
  Blocks: {
    default: [];
  };
}
export default class FreestyleSubsection extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;
  get show(): boolean {
    return this.emberFreestyle.shouldShowSubsection(
      this.args.section,
      this.args.name,
    );
  }
}
