/* global hljs */
import Ember from 'ember';

const { computed } = Ember;
const { RSVP: { Promise } } = Ember;

export default Ember.Service.extend({
  showLabels: true,
  showNotes: true,
  showCode: true,

  showMenu: true,

  defaultTheme: 'zenburn',

  // must be explicitly set to null here for (query-params s=null ss=null f=null) to work
  section: null,
  subsection: null,
  focus: null,

  notFocused: computed.not('focus'),

  hljsPromise: null,

  ensureHljs() {
    if (!this.hljsPromise) {
      this.hljsPromise = new Promise((resolve) => {
        return Ember.$.getScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js').done((script) => {
          resolve(script);
        })
      });
    }
    return this.hljsPromise;
  },

  highlight(el) {
    this.ensureHljs().then(() => {
      hljs.highlightBlock(el);
    })
  },

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
