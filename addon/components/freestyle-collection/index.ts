import Component from '@glimmer/component';
import { next } from '@ember/runloop';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { TrackedArray } from 'tracked-built-ins';
import type { WithBoundArgs } from '@glint/template';
import type FreestyleVariant from '../freestyle-variant';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { and, not, reads } from 'macro-decorators';
import { action } from '@ember/object';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface Signature {
  Element: HTMLDivElement;
  Args: {
    inline?: boolean;
    title?: string;
    defaultKey?: string;
  };
  Blocks: {
    default: [
      { variant: WithBoundArgs<typeof FreestyleVariant, 'collection'> },
    ];
  };
}

export default class FreestyleCollection extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;
  @and('emberFreestyle.notFocused', 'emberFreestyle.showLabels')
  declare showLabels: boolean;
  @and('showLabels', 'args.title') declare hasLabels: boolean;
  @not('emberFreestyle.focus') declare showVariantList: boolean;
  @reads('args.defaultKey', 'all') declare defaultKey: string;

  @tracked key: string | null = null;
  @tracked variants = new TrackedArray(['all']);

  get activeKey(): string {
    if (this.emberFreestyle.focus) {
      return 'all';
    }
    return this.key || this.defaultKey;
  }

  registerVariant(variantKey: string): void {
    next(() => {
      if (this.isDestroyed) {
        return;
      }
      if (!this.variants.includes(variantKey)) {
        this.variants.push(variantKey);
      }
    });
  }

  @action
  setKey(key: string): void {
    this.key = key;
  }
}
