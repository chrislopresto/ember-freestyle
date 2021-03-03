import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  emberFreestyle: service(),
  includeAllOption: true,
  menu: readOnly('emberFreestyle.menu'),
});
