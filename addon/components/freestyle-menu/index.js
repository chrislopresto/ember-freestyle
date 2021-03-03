import { inject as service } from '@ember/service';
import { reads } from 'macro-decorators';
import Component from '@glimmer/component';

export default class FreestyleMenu extends Component {
  @service emberFreestyle;
  @reads('args.includeAllOption', true) includeAllOption;
  @reads('emberFreestyle.menu') menu;
}
