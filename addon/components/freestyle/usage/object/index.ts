import templateOnlyComponent from '@ember/component/template-only';
import { type EmptyObject } from '@ember/component/helper';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    required?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue?: any;
    hideControls?: boolean;
    jsonCollapseDepth?: number;
  };
  Blocks: EmptyObject;
}
const FreestyleUsageObjectComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageObjectComponent;
