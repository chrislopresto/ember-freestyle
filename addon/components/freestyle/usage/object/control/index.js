import Component from '@glimmer/component';
import JsonFormatter from 'json-formatter-js';

const OPTIONS = {
  animateClose: false,
  animateOpen: false,
  theme: 'dark',
};

export default class FreestyleUsageObjectControlComponent extends Component {
  get jsonTree() {
    const json = this.args.value;
    const openDepth = this.args.jsonCollapseDepth;
    const jsonFormatter = new JsonFormatter(json, openDepth, OPTIONS);

    return jsonFormatter.render();
  }
}
