import templateOnlyComponent from '@ember/component/template-only';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    required?: boolean;
    defaultValue?: number;
    hideControls?: boolean;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onInput: (val: number) => void;
  };
}
const FreestyleUsageNumberComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageNumberComponent;
