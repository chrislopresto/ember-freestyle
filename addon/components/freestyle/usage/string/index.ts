import templateOnlyComponent from '@ember/component/template-only';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    required?: boolean;
    defaultValue?: string;
    hideControls?: boolean;
    value?: string;
    options?: string[];
    onInput: (val: string | null | undefined) => void;
  };
}
const FreestyleUsageStringComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageStringComponent;
