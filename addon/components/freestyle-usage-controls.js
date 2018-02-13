import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { schedule } from '@ember/runloop';
import Component from '@ember/component';
import { capitalize } from '@ember/string';
import layout from '../templates/components/freestyle-usage-controls';

export default Component.extend({
  layout,
  tagName: '',
  emberFreestyle: service(),
  showLabels: alias('emberFreestyle.showLabels'),
  showNotes: alias('emberFreestyle.showNotes'),
  showCode: alias('emberFreestyle.showCode'),

  showHeader: true,
  showFocus: true,

  didInsertElement() {
    this._super(...arguments);
    schedule('afterRender', () => {
      this.set('focus', this.get('emberFreestyle.focus'));
    });
  },

  actions: {
    toggleUsage(usageType) {
      let usageProperty = `emberFreestyle.show${capitalize(usageType)}`;
      this.toggleProperty(usageProperty);
    },
    setFocus() {
      this.set('emberFreestyle.focus', this.get('focus'));
    }
  }
});
