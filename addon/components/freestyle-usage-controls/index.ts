import Component from '@glimmer/component';
import { schedule } from '@ember/runloop';
import { capitalize } from '@ember/string';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { type EmptyObject } from '@ember/component/helper';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject as service } from '@ember/service';
import { action, get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface Signature {
  Args: EmptyObject;
  Blocks: EmptyObject;
}

export default class FreestyleUsageControls extends Component<Signature> {
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

  @action setup(): void {
    schedule('afterRender', () => {
      this.focus = this.emberFreestyle.focus;
    });
  }

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
    this.emberFreestyle.set('focus', this.focus);
  }
}
