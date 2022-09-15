import templateOnlyComponent from '@ember/component/template-only';
import { type EmptyObject } from '@ember/component/helper';

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
  Blocks: EmptyObject;
}
const FreestyleUsageNumberComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageNumberComponent;
