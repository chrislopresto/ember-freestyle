import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  emberFreestyle: service(),

  queryParams: ['l', 'n', 'c', 'm', 'f', 's', 'ss'],

  l: alias('emberFreestyle.showLabels'),
  n: alias('emberFreestyle.showNotes'),
  c: alias('emberFreestyle.showCode'),

  m: alias('emberFreestyle.showMenu'),

  f: alias('emberFreestyle.focus'),

  s: alias('emberFreestyle.section'),
  ss: alias('emberFreestyle.subsection')
});
