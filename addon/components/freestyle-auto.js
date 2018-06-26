import Component from '@ember/component';
import layout from '../templates/components/freestyle-auto';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
  layout,
  emberFreestyle: service(),
  components: readOnly('emberFreestyle.discoveredComponents')
});
