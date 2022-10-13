import Component from '@glimmer/component';
import { cssVariable, type CSSVariableInfo } from 'ember-freestyle';

export default class ProgressIconUsage extends Component {
  fractionComplete = 0.4;
  isCancelled = false;
  isComplete = false;
  size = 24;

  cssClassName = 'ProgressIcon';
  @cssVariable({ cssClassName: 'ProgressIcon' })
  declare progressIconBackgroundColor: CSSVariableInfo;
  @cssVariable declare progressIconStrokeColor: CSSVariableInfo;
}
