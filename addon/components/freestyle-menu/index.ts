import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject as service } from '@ember/service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reads } from 'macro-decorators';
import type EmberFreestyleService from '../../services/ember-freestyle';
import { type Section } from '../../services/ember-freestyle';
import { TrackedArray } from 'tracked-built-ins';

interface Signature {
  Args: {
    includeAllOption?: boolean;
  };
}

export default class FreestyleMenu extends Component<Signature> {
  @service declare emberFreestyle: EmberFreestyleService;
  @reads('args.includeAllOption', true) declare includeAllOption: boolean;
  @reads('emberFreestyle.menu') declare menu: TrackedArray<Section>;
}
