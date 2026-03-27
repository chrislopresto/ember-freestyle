import Modifier from 'ember-modifier';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { service } from '@ember/service';
import type EmberFreestyleService from '../services/ember-freestyle';

export default class FreestyleHighlight extends Modifier {
  @service declare emberFreestyle: EmberFreestyleService;

  modify(element: HTMLElement): void {
    this.emberFreestyle.highlight(element);
  }
}
