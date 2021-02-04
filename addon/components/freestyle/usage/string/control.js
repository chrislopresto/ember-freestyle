import Component from '@glimmer/component';

export default class FreestyleUsageStringControlComponent extends Component {
  get inputEvent() {
    return this.args.inputEvent || 'input';
  }
}
