import Ember from 'ember';

export default Ember.Controller.extend({
  section: null, // must be explicly set to null here for (query-params section=null) to work
  queryParams: ['section']
});
