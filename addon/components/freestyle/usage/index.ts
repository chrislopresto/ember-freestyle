/* eslint-disable @typescript-eslint/no-explicit-any */
import Component from '@glimmer/component';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { service } from '@ember/service';
import { action } from '@ember/object';
/* eslint-enable @typescript-eslint/no-unused-vars */
import type EmberFreestyleService from '../../../services/ember-freestyle';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    name?: string;
    description?: string;
    slug?: string;
    source?: string;
    highlightJsTheme?: string;
  };
  Blocks: {
    description: [];
    example: [];
    api: [
      {
        Action: any;
        Array: any;
        Base: any;
        Bool: any;
        Component: any;
        Number: any;
        Object: any;
        String: any;
        Yield: any;
      },
    ];
    cssVars: [
      {
        Basic: any;
      },
    ];
  };
}

export default class extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  get showName(): boolean {
    return this.emberFreestyle.showLabels && !!this.args.name;
  }
  get showNotes(): boolean {
    return this.emberFreestyle.showNotes;
  }
  get showSource(): boolean {
    return !!this.args.source && this.emberFreestyle.showCode;
  }
  get showApi(): boolean {
    return this.emberFreestyle.showApi;
  }
  get show(): boolean {
    const {
      effectiveSlug,
      emberFreestyle: { focus },
    } = this;

    if (effectiveSlug && focus) {
      return !!effectiveSlug.match(focus);
    } else {
      return true;
    }
  }

  get effectiveSlug(): string | undefined {
    return this.args.slug || this.args.name;
  }

  @action setFocus(): void {
    this.emberFreestyle.focus = this.effectiveSlug ?? null;
  }
}
