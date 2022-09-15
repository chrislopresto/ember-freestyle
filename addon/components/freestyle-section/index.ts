import Component from '@glimmer/component';
import type EmberFreestyleService from '../../services/ember-freestyle';
import type { WithBoundArgs } from '@glint/template';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
import FreestyleSubsection from '../freestyle-subsection';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    name: string;
  };
  Blocks: {
    default: [
      { subsection: WithBoundArgs<typeof FreestyleSubsection, 'section'> }
    ];
  };
}

export default class FreestyleSection extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  get show(): boolean {
    return this.emberFreestyle.shouldShowSection(this.args.name);
  }
}
