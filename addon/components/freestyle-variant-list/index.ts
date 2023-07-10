import templateOnlyComponent from '@ember/component/template-only';

interface Signature {
  Element: HTMLUListElement;
  Args: {
    variants: string[];
    activeKey: string;
    onClickVariant: (key: string) => void;
  };
}

const FreestyleVariantList = templateOnlyComponent<Signature>();
export default FreestyleVariantList;
