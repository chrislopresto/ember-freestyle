import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TestContext } from '@ember/test-helpers';
import { CSSVariableInfo } from 'ember-freestyle';

interface Context extends TestContext {
  fractionComplete: number;
  isCancelled: boolean;
  isComplete: boolean;
  size: number;
  progressIconBackgroundColor: CSSVariableInfo;
  progressIconStrokeColor: CSSVariableInfo;
}

const USAGE = '.FreestyleUsage';
const DESCRIPTION = `${USAGE}-description`;
const RENDERED = `${USAGE}-preview`;
const SOURCE = `${USAGE}-sourceContainer pre`;
const ARGUMENT = `${USAGE}Argument`;
const CSS_VAR = `${USAGE}CssVar`;

module('Integration | Component | freestyle/usage', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      fractionComplete: 0.4,
      size: 24,
      isCancelled: false,
      isComplete: false,
      progressIconBackgroundColor: new CSSVariableInfo(
        'process-icon-background-color',
        'ProgressIcon'
      ),
      progressIconStrokeColor: new CSSVariableInfo(
        'process-icon-stroke-color',
        'ProgressIcon'
      ),
    });

    await render<Context>(hbs`
      <Freestyle::Usage @name="ProgressIcon">
        <:description>
          This component shows a visual progress indicator of the fraction complete a task is.
        </:description>

        <:example>
          <div
            style={{html-safe (concat
              "--progress-icon-background-color: " this.progressIconBackgroundColor.value "; "
              "--progress-icon-stroke-color: " this.progressIconStrokeColor.value "; "
            )}}
          >
            <ProgressIcon
              @size={{this.size}}
              @isCancelled={{this.isCancelled}}
              @isComplete={{this.isComplete}}
              @fractionComplete={{this.fractionComplete}}
            />
          </div>
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
        <:cssVars as |Css|>
          <Css.Basic
            @name="progress-icon-background-color"
            @type="color"
            @description="Color of the background area"
            @defaultValue={{this.progressIconBackgroundColor.defaults}}
            @value={{this.progressIconBackgroundColor.value}}
            @onInput={{this.progressIconBackgroundColor.update}}
          />
          <Css.Basic
            @name="progress-icon-stroke-color"
            @type="color"
            @description="Color of the progress bar area"
            @defaultValue={{this.progressIconStrokeColor.defaults}}
            @value={{this.progressIconStrokeColor.value}}
            @onInput={{this.progressIconStrokeColor.update}}
          />
        </:cssVars>
      </Freestyle::Usage>
    `);

    assert.dom(USAGE).exists();
    assert.dom(DESCRIPTION).exists();
    assert.dom(`${RENDERED} > div > div`).hasClass('ProgressIcon');
    assert.dom(ARGUMENT).exists({ count: 4 });
    assert.dom(CSS_VAR).exists({ count: 2 });
    assert.dom(SOURCE).hasClass('handlebars');
  });
});
