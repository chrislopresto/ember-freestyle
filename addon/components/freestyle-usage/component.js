import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

let FreestyleUsage = Ember.Component.extend({
  layout,
  classNames: ['FreestyleUsage'],
  emberCli: Ember.inject.service(),
  snippetHbs: computed('snippetName', function() {
    return `${this.get('snippetName')}.hbs`;
  }),
  snippetJs: computed('snippetName', function() {
    return `${this.get('snippetName')}.js`;
  }),
  snippetScss: computed('snippetName', function() {
    return `${this.get('snippetName')}.scss`;
  }),
  highlightJsTheme: 'zenburn'
});

FreestyleUsage.reopenClass({
  positionalParams: ['snippetName']
});

export default FreestyleUsage;
