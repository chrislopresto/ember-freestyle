import Modifier from 'ember-modifier';
import { inject as service } from '@ember/service';

export default class FreestyleHighlight extends Modifier {
  @service emberFreestyle;

  modify(element) {
    this.emberFreestyle.highlight(element);
  }
}
