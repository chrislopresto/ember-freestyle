import Component from '@glimmer/component';
import EmberFreestyleService from '../../services/ember-freestyle';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { service } from '@ember/service';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    slug?: string;
  };
  Blocks: {
    default: [];
  };
}
export default class FreestyleAnnotation extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  get showNotes(): boolean {
    const slug = this.args.slug;
    const focus = this.emberFreestyle.focus;
    if (focus && slug) {
      return !!slug.match(focus);
    }
    return this.emberFreestyle.showNotes;
  }
}
