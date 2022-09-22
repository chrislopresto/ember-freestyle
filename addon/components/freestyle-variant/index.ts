import Component from '@glimmer/component';
import FreestyleCollection from '../freestyle-collection';
import Owner from '@ember/owner';

interface ComponentArgs {
  collection: FreestyleCollection;
  key: string;
}

interface Signature {
  Element: HTMLDivElement;
  Args: ComponentArgs;
  Blocks: {
    default: [];
  };
}

export default class FreestyleVariant extends Component<Signature> {
  constructor(owner: Owner, args: ComponentArgs) {
    super(owner, args);
    this.args.collection.registerVariant(this.args.key);
  }

  get inline(): boolean {
    const activeKey = this.args.collection.activeKey;
    return !!(this.args.collection.args.inline && activeKey === 'all');
  }

  get show(): boolean {
    const activeKey = this.args.collection.activeKey;
    return activeKey === 'all' || activeKey === this.args.key;
  }
}
