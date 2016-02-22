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

  actions: {
    toggleUsage(usageType) {
      let usageProperty = `emberFreestyle.show${capitalize(usageType)}`;
      this.toggleProperty(usageProperty);
    }
  }
});
