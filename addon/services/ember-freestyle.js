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

  hljsVersion: '9.12.0',
  hljsPromise: null,

  hljsUrl() {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/highlight.min.js`;
  },

  hljsThemeUrl(theme) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/styles/${theme}.min.css`;
  },

  ensureHljs() {
    if (!this.hljsPromise) {
      this.hljsPromise = new Promise((resolve) => {
        return Ember.$.getScript(this.hljsUrl()).done((script) => {
          resolve(script);
        })
      });
    }
    return this.hljsPromise;
  },

  highlight(el) {
    this.ensureHljs().then(() => {
      hljs.highlightBlock(el);
    });
  },

  ensureHljsTheme(theme) {
    if (Ember.$(`[data-hljs-theme=${theme}]`)[0]) {
      return;
    }

    let link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = this.hljsThemeUrl(theme);
    link.setAttribute('data-hljs-theme', `${theme}`);

    document.head.appendChild(link);
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
