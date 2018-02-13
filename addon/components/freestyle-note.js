import Component from '@ember/component';

let FreestyleNote = Component.extend({
  classNames: ['FreestyleNote']
});

FreestyleNote.reopenClass({
  positionalParams: ['slug']
});

export default FreestyleNote;
