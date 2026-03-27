import Component from '@glimmer/component';
import { schedule } from '@ember/runloop';
import { capitalize } from '@ember/string';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { service } from '@ember/service';
import { action, get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import { helper } from '@ember/component/helper';

export default class FreestyleUsageControls extends Component {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  get showLabels(): boolean {
    return this.emberFreestyle.showLabels;
  }
  set showLabels(val: boolean) {
    this.emberFreestyle.showLabels = val;
  }
  get showNotes(): boolean {
    return this.emberFreestyle.showNotes;
  }
  set showNotes(val: boolean) {
    this.emberFreestyle.showNotes = val;
  }
  get showCode(): boolean {
    return this.emberFreestyle.showCode;
  }
  set showCode(val: boolean) {
    this.emberFreestyle.showCode = val;
  }
  get showApi(): boolean {
    return this.emberFreestyle.showApi;
  }
  set showApi(val: boolean) {
    this.emberFreestyle.showApi = val;
  }

  showHeader = true;
  showFocus = true;
  @tracked focus: string | null = null;

  setup = modifier(() => {
    schedule('afterRender', () => {
      this.focus = this.emberFreestyle.focus;
    });
  });

  toggle = helper(
    ([prop]: ['showNotes' | 'showLabels' | 'showCode' | 'showApi']) => {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const component = this;
      return () => {
        const currentValue = get(component, prop) as boolean;
        const newValue = !currentValue;
        set(component, prop, newValue);
      };
    },
  );

  setFocusOnEnterKey = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.setFocus();
    }
  };

  @action
  toggleUsage(usageType: 'labels' | 'notes' | 'code' | 'api'): void {
    const propName = `show${capitalize(usageType)}` as
      | 'showLabels'
      | 'showNotes'
      | 'showCode'
      | 'showApi';
    set(this.emberFreestyle, propName, !get(this.emberFreestyle, propName));
  }

  @action
  setFocus(): void {
    this.emberFreestyle.focus = this.focus;
  }

  updateFocus = (ev: Event) => {
    this.focus = (ev.target as HTMLInputElement).value;
  };
}
