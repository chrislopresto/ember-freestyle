import Modifier from 'ember-modifier';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
import type EmberFreestyleService from '../services/ember-freestyle';

export default class FreestyleScrollSpy extends Modifier {
  @service declare emberFreestyle: EmberFreestyleService;

  private intersectionObserver: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;
  private visibleElements = new Set<Element>();
  private _isDestroyed = false;
  // Eagerly-resolved service ref so callbacks don't trigger lazy lookup after destroy
  private _service: EmberFreestyleService | null = null;

  modify(element: HTMLElement): void {
    if (this.intersectionObserver) {
      return;
    }

    this._service = this.emberFreestyle;

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (this._isDestroyed) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.visibleElements.add(entry.target);
          } else {
            this.visibleElements.delete(entry.target);
          }
        }
        this.updateActive();
      },
      { root: null, threshold: 0 },
    );

    this.mutationObserver = new MutationObserver(() => {
      if (this._isDestroyed) return;
      this.observeElements(element);
    });

    this.mutationObserver.observe(element, {
      childList: true,
      subtree: true,
    });

    this.observeElements(element);
  }

  private observeElements(container: HTMLElement): void {
    if (!this.intersectionObserver) return;

    this.intersectionObserver.disconnect();
    this.visibleElements.clear();

    const elements = container.querySelectorAll(
      '.FreestyleSubsection.is-showing, .FreestyleSection.FreestyleSection--showing[data-section]',
    );
    for (const el of elements) {
      this.intersectionObserver.observe(el);
    }
  }

  private updateActive(): void {
    if (this._isDestroyed || !this._service) return;

    let topmostSubsection: Element | null = null;
    let topmostSubsectionTop = Infinity;
    let topmostSection: Element | null = null;
    let topmostSectionTop = Infinity;

    for (const el of this.visibleElements) {
      const isSubsection =
        el.classList.contains('FreestyleSubsection') &&
        el.classList.contains('is-showing');
      const isSection =
        el.classList.contains('FreestyleSection') &&
        el.classList.contains('FreestyleSection--showing');

      if (!isSubsection && !isSection) continue;

      const rect = el.getBoundingClientRect();

      if (isSubsection && rect.top < topmostSubsectionTop) {
        topmostSubsectionTop = rect.top;
        topmostSubsection = el;
      }
      if (isSection && rect.top < topmostSectionTop) {
        topmostSectionTop = rect.top;
        topmostSection = el;
      }
    }

    const topmost = topmostSubsection || topmostSection;
    if (topmost) {
      const section = topmost.getAttribute('data-section');
      const subsection = topmost.getAttribute('data-subsection') || null;
      this._service.setScrollSpyActive(section, subsection);
    } else {
      this._service.setScrollSpyActive(null, null);
    }
  }

  willDestroy(): void {
    this._isDestroyed = true;
    this._service = null;
    const io = this.intersectionObserver;
    const mo = this.mutationObserver;
    this.intersectionObserver = null;
    this.mutationObserver = null;
    this.visibleElements.clear();
    if (io) io.disconnect();
    if (mo) mo.disconnect();
    super.willDestroy();
  }
}
