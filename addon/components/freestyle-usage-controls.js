import Ember from 'ember';
import layout from '../templates/components/freestyle-usage-controls';

const { computed, inject } = Ember;
const { capitalize } = Ember.String;

export default Ember.Component.extend({
  layout,
  tagName: '',
  emberFreestyle: inject.service(),
  showLabels: computed.alias('emberFreestyle.showLabels'),
  showNotes: computed.alias('emberFreestyle.showNotes'),
  showCode: computed.alias('emberFreestyle.showCode'),

  showHeader: true,
  showFocus: true,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.schedule('afterRender', () => {
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
