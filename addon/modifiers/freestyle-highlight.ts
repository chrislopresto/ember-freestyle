import Modifier from 'ember-modifier';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
import { type EmptyObject } from '@ember/component/helper';
import type EmberFreestyleService from '../services/ember-freestyle';

interface Signature {
  Args: EmptyObject;
}

export default class FreestyleHighlight extends Modifier<Signature> {
  @service declare emberFreestyle: EmberFreestyleService;

  modify(element: HTMLElement): void {
    this.emberFreestyle.highlight(element);
  }
}
