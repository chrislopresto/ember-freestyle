import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const TYPE = `${ARGUMENT}-type`;
const DESCRIPTION = `${ARGUMENT}-description`;
const CONTROL = `${ARGUMENT}-controls--Array`;
const INPUT = `${CONTROL} input`;
const ITEM = `.FreestyleUsageArray-item`;
const ADD_BUTTON = `.FreestyleUsageArray-addItem`;
const DELETE_BUTTON = `.FreestyleUsageArray-removeItem`;

module('Integration | Component | freestyle/usage/array', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('onChange', (items) => {
      this.set('items', items);
    });
  });

  test('Simply prints the value if an known type is passed in', async function (assert) {
    this.set('items', ['Bob']);
    await render(hbs`<Freestyle::Usage::Array
      @name="Names"
      @type="Borg"
      @description="A list of names"
      @items={{this.items}}
      @onChange={{this.onChange}}
    />`);

    assert.dom(NAME).hasText('Names');
    assert.dom(TYPE).hasText('[Borg]');
    assert.dom(DESCRIPTION).containsText('A list of names');
    assert.dom(CONTROL).containsText('Bob');
  });

  module('String', function (hooks) {
    hooks.beforeEach(function () {
      this.set('items', ['Bob']);
    });

    test('Can add, update and remove items', async function (assert) {
      assert.expect(7);
      await render(hbs`<Freestyle::Usage::Array
        @name="Names"
        @type="String"
        @description="A list of names"
        @items={{this.items}}
        @onChange={{this.onChange}}
      />`);

      assert.dom(NAME).hasText('Names');
      assert.dom(TYPE).hasText('[String]');
      assert.dom(DESCRIPTION).containsText('A list of names');
      assert.dom(ITEM).exists({ count: 1 });
      assert.dom(INPUT).hasAttribute('type', 'text');
      assert.dom(INPUT).hasValue('Bob');

      await click(ADD_BUTTON);
      assert.deepEqual(this.items, ['Bob', ''], 'items is updated');
      await this.pauseTest();
      assert.dom(ITEM).exists({ count: 2 });

      await click(`${ITEM}:last-child ${DELETE_BUTTON}`);
      assert.deepEqual(this.items, ['Bob']);

      await fillIn(INPUT, 'Robert');
      assert.deepEqual(this.items, ['Robert']);
    });
  });
});
