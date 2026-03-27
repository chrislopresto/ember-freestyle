import Modifier from 'ember-modifier';
import { service } from '@ember/service';
import type EmberFreestyleService from '../services/ember-freestyle';

interface Signature {
  Element: HTMLElement;
  Args: {
    Positional: [highlightJsTheme?: string];
  };
}

export default class EnsureFreestyleTheme extends Modifier<Signature> {
  @service declare emberFreestyle: EmberFreestyleService;

  modify(
    _element: HTMLElement,
    positional: Signature['Args']['Positional'],
  ): void {
    const computedTheme = positional?.[0] || this.emberFreestyle.defaultTheme;
    this.emberFreestyle.ensureHljsTheme(computedTheme);
  }
}
