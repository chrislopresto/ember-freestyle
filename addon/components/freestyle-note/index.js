import Component from '@ember/component';

let FreestyleNote = Component.extend({
  tagName: '',
});

FreestyleNote.reopenClass({
  positionalParams: ['slug'],
});

export default FreestyleNote;
