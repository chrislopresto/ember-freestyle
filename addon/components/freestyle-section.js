import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-section';

export default Component.extend({
  layout,
  classNames: ['FreestyleSection'],
  classNameBindings: ['show:FreestyleSection--showing:FreestyleSection--hidden'],

  emberFreestyle: service(),
  show: computed('emberFreestyle.section', 'name', function() {
    let focusedSection = this.get('emberFreestyle.section');
    return isBlank(focusedSection) || (this.get('name') === focusedSection);
  }),

  showName: and('emberFreestyle.notFocused', 'name'),
  hasName: and('showName', 'name'),

  willRender() {
    this._super(...arguments);
    this.get('emberFreestyle').registerSection(this.get('name'));
  }
});
