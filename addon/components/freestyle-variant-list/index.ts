import templateOnlyComponent from '@ember/component/template-only';
import { type EmptyObject } from '@ember/component/helper';

interface Signature {
  Element: HTMLUListElement;
  Args: {
    variants: string[];
    activeKey: string;
    onClickVariant: (key: string) => void;
  };
  Blocks: EmptyObject;
}

const FreestyleVariantList = templateOnlyComponent<Signature>();
export default FreestyleVariantList;
