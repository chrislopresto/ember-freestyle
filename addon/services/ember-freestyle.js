/* global hljs */
import { alias, not } from '@ember/object/computed';

import { isPresent } from '@ember/utils';
import { A } from '@ember/array';
import Service from '@ember/service';
import { Promise } from 'rsvp';

export default Service.extend({
  showLabels: true,
  showNotes: true,
  showCode: true,

  showMenu: true,

  defaultTheme: 'zenburn',
  snippets: alias('freestyle-snippets'),

  // must be explicitly set to null here for (query-params s=null ss=null f=null) to work
  section: null,
  subsection: null,
  focus: null,

  notFocused: not('focus'),

  hljsVersion: '9.12.0',
  hljsPromise: null,

  init() {
    this._super(...arguments);
    this.hljsLanguagePromises = {}
  },

  hljsUrl() {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/highlight.min.js`;
  },

  hljsThemeUrl(theme) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/styles/${theme}.min.css`;
  },

  hljsLanguageUrl(language) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/languages/${language}.min.js`;
  },

  ensureHljs() {
    if (!this.hljsPromise) {
      this.hljsPromise = new Promise((resolve) => {
        let src = this.hljsUrl();
        let script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
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
    if (document.querySelector(`[data-hljs-theme=${theme}]`)) {
      return;
    }

    let link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = this.hljsThemeUrl(theme);
    link.setAttribute('data-hljs-theme', `${theme}`);

    document.head.appendChild(link);
  },

  ensureHljsLanguage(language) {
    if (!this.hljsLanguagePromises[language]) {
      this.hljsLanguagePromises[language] = new Promise((resolve) => {
        let src = this.hljsLanguageUrl(language);
        let script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    }
    return this.hljsLanguagePromises[language];
  },

  // menu - tree structure of named sections with named subsections

  registerSection(sectionName, subsectionName = '') {
    let menu = this.get('menu') || A([]);
    if (!menu.filterBy('name', sectionName).length) {
      menu.push({
        name: sectionName,
        subsections: A([])
      });
    }
    if (isPresent(subsectionName)) {
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
