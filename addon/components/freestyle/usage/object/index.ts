import templateOnlyComponent from '@ember/component/template-only';

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
}
const FreestyleUsageObjectComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageObjectComponent;
