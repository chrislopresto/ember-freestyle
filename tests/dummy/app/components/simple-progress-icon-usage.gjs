import Component from '@glimmer/component';
import FreestyleUsage from 'ember-freestyle/components/freestyle/usage';
import ProgressIcon from 'dummy/components/progress-icon';

export default class SimpleProgressIconUsage extends Component {
  <template>
    <FreestyleUsage @slug={{@slug}}>
      <:description>
        Simple example at 100%
      </:description>
      <:example>
          <ProgressIcon
            @size={{@size}}
            @fractionComplete={{1}}
          />
      </:example>
    </FreestyleUsage>
  </template>
}