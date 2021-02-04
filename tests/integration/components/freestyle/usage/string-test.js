import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const CONTROL = `${ARGUMENT}-controls--String input`;

module('Integration | Component | freestyle/usage/string', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a text input', async function (assert) {
    assert.expect(4);
    this.set('value', 'Bob');
    this.set('onInput', function (value) {
      assert.equal(value, 'Robert');
    });
    await render(hbs`<Freestyle::Usage::String
      @name="Name"
      @value={{this.value}}
      @onInput={{this.onInput}}
    />`);

    assert.dom(NAME).hasText('Name');
    assert.dom(CONTROL).hasAttribute('type', 'text');
    assert.dom(CONTROL).hasValue('Bob');
    await fillIn(CONTROL, 'Robert');
  });
});
