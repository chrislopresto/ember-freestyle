import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  emberFreestyle: service(),
  menuIncludesAllItem: readOnly('emberFreestyle.menuIncludesAllItem'),
  menu: readOnly('emberFreestyle.menu')
});
