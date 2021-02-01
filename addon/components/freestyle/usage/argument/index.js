import Component from '@glimmer/component';

export default class FreestyleUsageArgumentComponent extends Component {
  get typeLabel() {
    return this.args.typeLabel || this.args.type;
  }
}
