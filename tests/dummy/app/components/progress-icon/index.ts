import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { guidFor } from '@ember/object/internals';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    isCancelled: boolean;
    isComplete: boolean;
    fractionComplete: number;
    size: number;
  };
}

export default class ProgressIcon extends Component<Signature> {
  get elementId() {
    return guidFor(this);
  }

  get inProgress(): boolean {
    return !(this.args.isCancelled || this.args.isComplete);
  }

  get pieStyle(): ReturnType<typeof htmlSafe> {
    return htmlSafe(
      `stroke-dasharray: ${this.args.fractionComplete * 60.0} 60`,
    );
  }

  get backgroundSizeStyle(): string | undefined {
    if (this.args.isCancelled || this.args.isComplete) {
      const size = this.args.size;
      return `${size * 0.666}px ${size * 0.666}px`;
    }
    return undefined;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    ProgressIcon: typeof ProgressIcon;
  }
}
