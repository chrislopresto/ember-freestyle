import Modifier from 'ember-modifier';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
import type EmberFreestyleService from '../services/ember-freestyle';

const SELECTOR =
  '.FreestyleSubsection.is-showing, .FreestyleSection.FreestyleSection--showing[data-section]';

export default class FreestyleScrollSpy extends Modifier {
  @service declare emberFreestyle: EmberFreestyleService;

  private intersectionObserver: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;
  private visibleElements = new Set<Element>();
  private observedElements = new Set<Element>();
  private _isDestroyed = false;
  private _service: EmberFreestyleService | null = null;
  private _pendingMutationFrame: number | null = null;

  modify(element: HTMLElement): void {
    if (this.intersectionObserver) {
      return;
    }

    // Eagerly resolve service while the owner is still alive
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
      {
        root: null,
        threshold: 0,
        // Shrink the effective viewport by 50px top so elements with just
        // a sliver visible at the very top don't count as "topmost"
        rootMargin: '-50px 0px 0px 0px',
      },
    );

    // Debounce MutationObserver with rAF to coalesce rapid DOM changes
    // (e.g. Glimmer's own rendering)
    this.mutationObserver = new MutationObserver(() => {
      if (this._isDestroyed) return;
      if (this._pendingMutationFrame !== null) return;
      this._pendingMutationFrame = requestAnimationFrame(() => {
        this._pendingMutationFrame = null;
        if (this._isDestroyed) return;
        this.syncObservedElements(element);
      });
    });

    this.mutationObserver.observe(element, {
      childList: true,
      subtree: true,
    });

    this.syncObservedElements(element);
  }

  /**
   * Diff-based re-observation: only observe/unobserve elements that changed,
   * preserving the IntersectionObserver's internal state and visibleElements set.
   */
  private syncObservedElements(container: HTMLElement): void {
    if (!this.intersectionObserver) return;

    const currentElements = new Set(container.querySelectorAll(SELECTOR));

    // Unobserve elements that are no longer in the DOM
    for (const el of this.observedElements) {
      if (!currentElements.has(el)) {
        this.intersectionObserver.unobserve(el);
        this.observedElements.delete(el);
        this.visibleElements.delete(el);
      }
    }

    // Observe newly added elements
    for (const el of currentElements) {
      if (!this.observedElements.has(el)) {
        this.intersectionObserver.observe(el);
        this.observedElements.add(el);
      }
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

    // Prefer subsections; fall back to section-level for sections without children
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
    if (this._pendingMutationFrame !== null) {
      cancelAnimationFrame(this._pendingMutationFrame);
      this._pendingMutationFrame = null;
    }
    const io = this.intersectionObserver;
    const mo = this.mutationObserver;
    this.intersectionObserver = null;
    this.mutationObserver = null;
    this.visibleElements.clear();
    this.observedElements.clear();
    if (io) io.disconnect();
    if (mo) mo.disconnect();
  }
}
