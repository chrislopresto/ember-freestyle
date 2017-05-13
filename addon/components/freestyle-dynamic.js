import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic';

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],
}).reopenClass({
  positionalParams: ['slug']
});
