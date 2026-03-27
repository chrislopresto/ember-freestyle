import Component from '@glimmer/component';
import type EmberFreestyleService from '../../services/ember-freestyle';
import type { WithBoundArgs } from '@glint/template';
import { service } from '@ember/service';
import FreestyleSubsection from '../freestyle-subsection';
import Owner from '@ember/owner';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    name: string;
  };
  Blocks: {
    default: [
      { subsection: WithBoundArgs<typeof FreestyleSubsection, 'section'> },
    ];
  };
}

export default class FreestyleSection extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  constructor(owner: Owner, args: Signature['Args']) {
    super(owner, args);
    this.emberFreestyle.registerSection(this.args.name);
  }

  get show(): boolean {
    return this.emberFreestyle.shouldShowSection(this.args.name);
  }
}
