/* eslint-disable ember/no-empty-glimmer-component-classes */
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
            @size={{24}}
            @fractionComplete={{1}}
          />
      </:example>
    </FreestyleUsage>
  </template>
}
