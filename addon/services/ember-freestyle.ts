import Service from '@ember/service';
import { isBlank, isPresent } from '@ember/utils';
import { Promise } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export interface Section {
  name: string;
  subsections: Subsection[];
}

interface Subsection {
  name: string;
}

export default class EmberFreestyleService extends Service {
  @tracked showLabels = true;
  @tracked showNotes = true;
  @tracked showCode = true;
  @tracked showApi = true;

  @tracked menu: Section[] = [];
  @tracked showMenu = true;
  @tracked allowRenderingAllSections = true;

  defaultTheme = 'zenburn';

  // must be explicitly set to null here for (query-params s=null ss=null f=null) to work
  @tracked section = null;
  @tracked subsection = null;
  @tracked focus: string | null = null;

  get notFocused(): boolean {
    return !this.focus;
  }

  shouldShowSection(sectionName: string): boolean {
    const focusedSection = this.section;
    if (isBlank(focusedSection) && this.allowRenderingAllSections) {
      return true;
    }
    return sectionName === focusedSection;
  }

  shouldShowSubsection(sectionName: string, subsectionName: string): boolean {
    if (!this.shouldShowSection(sectionName)) {
      return false;
    }
    const focusedSubsection = this.subsection;
    return isBlank(focusedSubsection) || subsectionName === focusedSubsection;
  }

  hljsVersion = '9.12.0';
  hljsPromise: Promise<void> | null = null;
  hljsLanguagePromises: Record<string, Promise<void>> = {};

  hljsUrl(): string {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/highlight.min.js`;
  }

  hljsThemeUrl(theme: string): string {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/styles/${theme}.min.css`;
  }

  hljsLanguageUrl(language: string): string {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this.hljsVersion}/languages/${language}.min.js`;
  }

  ensureHljs(): Promise<void> {
    if (!this.hljsPromise) {
      this.hljsPromise = new Promise((resolve) => {
        const src = this.hljsUrl();
        const script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    }
    return this.hljsPromise;
  }

  highlight(el: HTMLElement): void {
    this.ensureHljs()
      .then(() => {
        return this.ensureHljsLanguage('handlebars');
      })
      .then(() => {
        hljs.highlightBlock(el);
      });
  }

  ensureHljsTheme(theme: string): void {
    if (document.querySelector(`[data-hljs-theme=${theme}]`)) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = this.hljsThemeUrl(theme);
    link.setAttribute('data-hljs-theme', `${theme}`);

    document.head.appendChild(link);
  }

  ensureHljsLanguage(language: string): Promise<void> {
    if (!this.hljsLanguagePromises[language]) {
      this.hljsLanguagePromises[language] = new Promise((resolve) => {
        const src = this.hljsLanguageUrl(language);
        const script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    }
    return this.hljsLanguagePromises[language];
  }

  // menu - tree structure of named sections with named subsections

  @action
  registerSection(sectionName: string, subsectionName = ''): void {
    this.menu;
    if (!this.menu.find((s) => s.name === sectionName)) {
      this.menu.push({
        name: sectionName,
        subsections: [],
      });
    }
    if (isPresent(subsectionName)) {
      const section = this.menu.find((s) => s.name === sectionName);
      if (
        section &&
        !section.subsections.find((s) => s.name === subsectionName)
      ) {
        section.subsections.push({
          name: subsectionName,
        });
        section.subsections = [...section.subsections];
      }
    }
    scheduleOnce('afterRender', this, this.notifyMenuChanged);
  }

  notifyMenuChanged = () => {
    // eslint-disable-next-line no-self-assign
    this.menu = this.menu;
  };
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'ember-freestyle': EmberFreestyleService;
  }
}
