import Component from '@glimmer/component';
import JsonFormatter, {
  type JSONFormatterConfiguration,
} from 'json-formatter-js';

const OPTIONS: JSONFormatterConfiguration = {
  animateClose: false,
  animateOpen: false,
  theme: 'dark',
};

interface Signature {
  Args: {
    value: Record<string, unknown>;
    jsonCollapseDepth?: number;
  };
}

export default class FreestyleUsageObjectControlComponent extends Component<Signature> {
  get jsonTree(): HTMLDivElement {
    const json = this.args.value;
    const openDepth = this.args.jsonCollapseDepth;
    const jsonFormatter = new JsonFormatter(json, openDepth, OPTIONS);

    return jsonFormatter.render();
  }
}
