import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const USAGE = '.FreestyleUsage';
const DESCRIPTION = `${USAGE}-description`;
const RENDERED = `${USAGE}-preview`;
const SOURCE = `${USAGE}-sourceContainer pre`;
const ARGUMENT = `${USAGE}Argument`;

module('Integration | Component | freestyle/usage', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      fractionComplete: 0.4,
      size: 24,
      isCancelled: false,
      isComplete: false,
    });

    await render(hbs`
      <Freestyle::Usage @name="ProgressIcon">
        <:description>
          This component shows a visual progress indicator of the fraction complete a task is.
        </:description>

        <:example>
            <ProgressIcon
              @size={{this.size}}
              @isCancelled={{this.isCancelled}}
              @isComplete={{this.isComplete}}
              @fractionComplete={{this.fractionComplete}}
            />
        </:example>

        <:api as |Args|>
          <Args.Number
            @name="size"
            @required={{true}}
            @min={{10}}
            @max={{60}}
            @description="the size of the circle, in px"
            @value={{this.size}}
            @onInput={{fn (mut this.size)}}
          />
          <Args.Number
            @name="fractionComplete"
            @defaultValue={{0}}
            @min={{0}}
            @max={{1}}
            @step={{0.1}}
            @description="completeness from 0 to 1"
            @value={{this.fractionComplete}}
            @onInput={{fn (mut this.fractionComplete)}}
          />
          <Args.Bool
            @name="isCancelled"
            @defaults={{false}}
            @description='when true shows an "x" icon'
            @value={{this.isCancelled}}
            @onInput={{fn (mut this.isCancelled)}}
          />
          <Args.Bool
            @name="isComplete"
            @defaults={{false}}
            @description='when true shows a checkmark icon'
            @value={{this.isComplete}}
            @onInput={{fn (mut this.isComplete)}}
          />
        </:api>
      </Freestyle::Usage>
    `);

    assert.dom(USAGE).exists();
    assert.dom(DESCRIPTION).exists();
    assert.dom(`${RENDERED} > div`).hasClass('ProgressIcon');
    assert.dom(ARGUMENT).exists({ count: 4 });
    assert.dom(SOURCE).hasClass('handlebars');
  });
});
