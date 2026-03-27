import Component from '@glimmer/component';
import type EmberFreestyleService from 'ember-freestyle/services/ember-freestyle';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { service } from '@ember/service';
import { action } from '@ember/object';
import { and, or, reads } from 'macro-decorators';
/* eslint-enable @typescript-eslint/no-unused-vars */
import { DynamicProperties } from '../freestyle-dynamic';
interface Signature {
  Element: HTMLDivElement;
  Args: {
    isDynamic?: boolean;
    inline?: boolean;
    slug?: string;
    source?: string;
    title?: string;
    dynamicProperties?: DynamicProperties;
  };
  Blocks: {
    default: [];
  };
}

export default class FreestyleUsage extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;
  @reads('emberFreestyle.showLabels') declare showLabels: boolean;
  @reads('emberFreestyle.showCode') declare showCode: boolean;

  get show(): boolean {
    const slug = this.args.slug;
    const focus = this.emberFreestyle.focus;
    if (focus && slug) {
      return !!slug.match(focus);
    }
    return true;
  }

  @reads('emberFreestyle.defaultTheme') declare defaultTheme:
    | string
    | undefined;

  // highlightJsTheme - passed in
  @or('defaultTheme', 'highlightJsTheme') declare computedTheme: string;

  @and('showLabels', 'args.title') declare hasLabels: boolean;
  get hasCode(): boolean {
    return !!(this.showCode && (this.args.slug || this.args.source));
  }
  @reads('args.dynamicProperties', {}) declare dynamicProperties: Record<
    string,
    unknown
  >;

  @action
  ensureTheme(): void {
    this.emberFreestyle.ensureHljsTheme(this.computedTheme);
  }

  @action
  setFocus(): void {
    this.emberFreestyle.focus = this.args.slug ?? null;
  }
}
