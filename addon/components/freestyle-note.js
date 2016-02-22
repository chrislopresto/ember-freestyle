import Ember from 'ember';

let FreestyleNote = Ember.Component.extend({
  classNames: ['FreestyleNote']
});

FreestyleNote.reopenClass({
  positionalParams: ['snippetName']
});

export default FreestyleNote;
