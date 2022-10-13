import '@glint/environment-ember-loose';

import AndHelper from 'ember-truth-helpers/helpers/and';
import EqHelper from 'ember-truth-helpers/helpers/eq';
import NotHelper from 'ember-truth-helpers/helpers/not';
import { HelperLike, ModifierLike } from '@glint/template';
import { SafeString } from '@ember/template/-private/handlebars';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    and: typeof AndHelper;
    eq: typeof EqHelper;
    not: typeof NotHelper;
    'did-insert': ModifierLike<{
      Args: { Positional: [f: (el: HTMLElement) => void] };
    }>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'focus-trap': ModifierLike<{ Args: { Named: any } }>;
    'html-safe': HelperLike<{
      Args: { Positional: [string] };
      Return: SafeString;
    }>;
  }
}
