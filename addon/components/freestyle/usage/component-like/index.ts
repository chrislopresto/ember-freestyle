import templateOnlyComponent from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    required?: boolean;
    defaultValue?: ComponentLike;
    hideControls?: boolean;
    value?: ComponentLike;
    options?: ComponentLike[];
    onChange: (val: ComponentLike | null | undefined) => void;
  };
}
const FreestyleUsageComponentLikeComponent = templateOnlyComponent<Signature>();
export default FreestyleUsageComponentLikeComponent;
