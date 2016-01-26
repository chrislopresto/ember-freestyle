import Ember from 'ember';

export default Ember.Service.extend({
  // Each json config file in the freestyle directory is injected
  // as a property on this service by the ember-freestyle
  // initializer

  showLabels: true,
  showNotes: true,
  showCode: true,

  defaultTheme: 'zenburn',

  // must be explicly set to null here for (query-params section=null) to work
  section: null,
  subsection: null,

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
