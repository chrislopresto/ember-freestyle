import Component from '@glimmer/component';
import { service } from '@ember/service';
import EmberFreestyleService from '../../services/ember-freestyle';
import Owner from '@ember/owner';

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

  constructor(owner: Owner, args: Signature['Args']) {
    super(owner, args);
    this.emberFreestyle.registerSection(this.args.section, this.args.name);
  }

  get show(): boolean {
    return this.emberFreestyle.shouldShowSubsection(
      this.args.section,
      this.args.name,
    );
  }
}
