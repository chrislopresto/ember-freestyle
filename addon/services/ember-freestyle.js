import Ember from 'ember';

const { computed } = Ember;

export default Ember.Service.extend({
  // Each json config file in the freestyle directory is injected
  // as a property on this service by the ember-freestyle
  // initializer

  showLabels: true,
  showNotes: true,
  showCode: true,

  defaultTheme: 'zenburn',

  // must be explicitly set to null here for (query-params s=null ss=null f=null) to work
  section: null,
  subsection: null,
  focus: null,

  notFocused: computed.not('focus'),

  // menu - tree structure of named sections with named subsections

  registerSection(sectionName, subsectionName = '') {
    let menu = this.get('menu') || Ember.A([]);
    if (!menu.filterBy('name', sectionName).length) {
      menu.push({
        name: sectionName,
        subsections: Ember.A([])
      });
    }
    if (Ember.isPresent(subsectionName)) {
      let section = menu.findBy('name', sectionName);
      if (!section.subsections.filterBy('name', subsectionName).length) {
        section.subsections.push({
          name: subsectionName
        });
      }
    }
    this.set('menu', menu);
  }
});
