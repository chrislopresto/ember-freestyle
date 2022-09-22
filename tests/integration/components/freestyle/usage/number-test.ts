import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  value: number;
  onInput: (val: number) => void;
}

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const CONTROL = `${ARGUMENT}-controls--Number input`;

module('Integration | Component | freestyle/usage/number', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a number input', async function (this: Context, assert) {
    assert.expect(3);
    this.set('value', 5);
    this.set('onInput', function (value: number) {
      assert.strictEqual(value, 6);
    });
    await render<Context>(hbs`<Freestyle::Usage::Number
      @name="Count"
      @value={{this.value}}
      @onInput={{this.onInput}}
    />`);

    assert.dom(NAME).hasText('Count');
    assert.dom(CONTROL).hasAttribute('type', 'number');
    await fillIn(CONTROL, '6');
  });

  module('range', function () {
    test('renders an interactive range element', async function (this: Context, assert) {
      assert.expect(2);
      this.set('value', 5);
      this.set('onInput', function (value: number) {
        assert.strictEqual(value, 6);
      });
      await render<Context>(hbs`<Freestyle::Usage::Number
        @name="Count"
        @value={{this.value}}
        @min={{1}}
        @max={{10}}
        @onInput={{this.onInput}}
      />`);

      assert.dom(CONTROL).hasAttribute('type', 'range');
      await fillIn(CONTROL, '6');
    });
  });
});
