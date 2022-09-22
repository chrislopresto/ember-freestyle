import templateOnlyComponent from '@ember/component/template-only';
import { type EmptyObject } from '@ember/component/helper';

interface Signature {
  Element: HTMLSpanElement;
  Args: EmptyObject;
  Blocks: EmptyObject;
}

const FreestyleFocusButton = templateOnlyComponent<Signature>();
export default FreestyleFocusButton;
