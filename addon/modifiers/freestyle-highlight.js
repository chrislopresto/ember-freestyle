import Modifier from 'ember-modifier';
import { inject as service } from '@ember/service';

export default class FreestyleHighlight extends Modifier {
  @service emberFreestyle;

  didReceiveArguments() {
    this.emberFreestyle.highlight(this.element);
  }
}
