import templateOnlyComponent from '@ember/component/template-only';
import { type EmptyObject } from '@ember/component/helper';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    required?: boolean;
    defaultValue?: string;
    hideControls?: boolean;
    value?: string;
    options?: string[];
    onInput: (val: string | null) => void;
  };
  Blocks: EmptyObject;
}
const FreestyleUsageStringComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageStringComponent;
