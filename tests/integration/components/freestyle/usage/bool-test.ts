import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  value: boolean;
  onInput: (val: boolean) => void;
}

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const CONTROL = `${ARGUMENT}-controls--Boolean input`;

module('Integration | Component | freestyle/usage/bool', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a checkbox input', async function (this: Context, assert) {
    assert.expect(4);
    this.set('value', true);
    this.set('onInput', function (value: boolean) {
      assert.false(value);
    });
    await render(hbs`<Freestyle::Usage::Bool
      @name="Enabled"
      @value={{this.value}}
      @onInput={{this.onInput}}
    />`);

    assert.dom(NAME).hasText('Enabled');
    assert.dom(CONTROL).hasAttribute('type', 'checkbox');
    assert.dom(CONTROL).isChecked();
    await click(CONTROL);
  });
});
