import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, select } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  value: string;
  options?: string[];
  onInput: (val?: string) => void;
}

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const CONTROL = `${ARGUMENT}-controls--String input`;
const SELECT_CONTROL = `${ARGUMENT}-controls--String select`;

module('Integration | Component | freestyle/usage/string', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a text input', async function (this: Context, assert) {
    assert.expect(4);
    this.set('value', 'Bob');
    this.set('onInput', function (value: string) {
      assert.strictEqual(value, 'Robert');
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

  test('renders a select list', async function (this: Context, assert) {
    assert.expect(4);
    this.set('value', 'Bob');
    this.set('options', ['Bob', 'Sue', 'Larry']);
    this.set('onInput', function (value: string) {
      assert.strictEqual(value, 'Larry');
    });
    await render(hbs`<Freestyle::Usage::String
      @name="Name"
      @value={{this.value}}
      @options={{this.options}}
      @onInput={{this.onInput}}
    />`);

    assert.dom(NAME).hasText('Name');
    assert.dom(SELECT_CONTROL).exists();
    assert.dom(SELECT_CONTROL).hasValue('Bob');
    await select(SELECT_CONTROL, 'Larry');
  });

  test('Does not render the controls', async function (this: Context, assert) {
    await render(hbs`<Freestyle::Usage::String
      @hideControls={{true}}
    />`);

    assert.dom(CONTROL).doesNotExist();
  });
});
