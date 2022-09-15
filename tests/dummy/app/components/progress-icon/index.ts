import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { type EmptyObject } from '@ember/component/helper';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    isCancelled: boolean;
    isComplete: boolean;
    fractionComplete: number;
    size: number;
  };
  Blocks: EmptyObject;
}

export default class extends Component<Signature> {
  get inProgress(): boolean {
    return !(this.args.isCancelled || this.args.isComplete);
  }

  get pieStyle(): ReturnType<typeof htmlSafe> {
    return htmlSafe(
      `stroke-dasharray: ${this.args.fractionComplete * 60.0} 60`
    );
  }

  get elementStyle(): ReturnType<typeof htmlSafe> {
    const { size } = this.args;
    const styles = [`width: ${size}px`, `height: ${size}px`];
    if (this.args.isCancelled || this.args.isComplete) {
      styles.push(`background-size: ${size * 0.666}px ${size * 0.666}px`);
    }
    return htmlSafe(styles.join(';'));
  }
}
