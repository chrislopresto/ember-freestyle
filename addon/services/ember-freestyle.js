/* global hljs */
import Service from '@ember/service';
import { isPresent } from '@ember/utils';
import { A } from '@ember/array';
import { Promise } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { isBlank } from '@ember/utils';
import { action } from '@ember/object';
export default class EmberFreestyleService extends Service {
  @tracked showLabels = true;
  @tracked showNotes = true;
  @tracked showCode = true;
  @tracked showApi = true;

  @tracked menu = null;
  @tracked showMenu = true;
  @tracked allowRenderingAllSections = true;

  defaultTheme = 'zenburn';

  // must be explicitly set to null here for (query-params s=null ss=null f=null) to work
  @tracked section = null;
  @tracked subsection = null;
  @tracked focus = null;

  get notFocused() {
    return !this.focus;
  }

  shouldShowSection(sectionName) {
    let focusedSection = this.section;
    if (isBlank(focusedSection) && this.allowRenderingAllSections) {
      return true;
    }
    return sectionName === focusedSection;
  }

  shouldShowSubsection(sectionName, subsectionName) {
    if (!this.shouldShowSection(sectionName)) {
      return false;
    }
    let focusedSubsection = this.subsection;
    return isBlank(focusedSubsection) || subsectionName === focusedSubsection;
  }

  hljsVersion = '9.12.0';
  hljsPromise = null;
  hljsLanguagePromises = {};

  hljsUrl() {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/highlight.min.js`;
  }

  hljsThemeUrl(theme) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/styles/${theme}.min.css`;
  }

  hljsLanguageUrl(language) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/languages/${language}.min.js`;
  }

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
  }

  highlight(el) {
    this.ensureHljs()
      .then(() => {
        return this.ensureHljsLanguage('handlebars');
      })
      .then(() => {
        hljs.highlightBlock(el);
      });
  }

  ensureHljsTheme(theme) {
    if (document.querySelector(`[data-hljs-theme=${theme}]`)) {
      return;
    }

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = this.hljsThemeUrl(theme);
    link.setAttribute('data-hljs-theme', `${theme}`);

    document.head.appendChild(link);
  }

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
  }

  // menu - tree structure of named sections with named subsections

  @action
  registerSection(sectionName, subsectionName = '') {
    let menu = this.menu || A([]);
    if (!menu.filterBy('name', sectionName).length) {
      menu.push({
        name: sectionName,
        subsections: A([]),
      });
    }
    if (isPresent(subsectionName)) {
      let section = menu.findBy('name', sectionName);
      if (!section.subsections.filterBy('name', subsectionName).length) {
        section.subsections.push({
          name: subsectionName,
        });
      }
    }
    this.menu = menu;
  }
}
