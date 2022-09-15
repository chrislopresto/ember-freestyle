import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { A } from '@ember/array';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from '@ember/test-helpers';
import MutableArray from '@ember/array/mutable';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ItemArray = MutableArray<any>;

interface Context extends TestContext {
  items: ItemArray;
  identity?: string;
  type: string;
  name?: string;
  description?: string;
  required?: boolean;
  defaultValue?: unknown;
  hideControls?: boolean;
  readOnly?: boolean;
  jsonCollapseDepth?: number;
  onChange: (items: ItemArray) => void;
}

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
    this.set('onChange', (items: ItemArray) => {
      this.set('items', items);
    });
  });

  test('Simply prints the value if an known type is passed in', async function (this: Context, assert) {
    this.set('items', A(['Bob']));
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
      this.set('items', A(['Bob']));
    });

    test('Can add, update and remove items', async function (this: Context, assert) {
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
      assert.deepEqual(this.items.toArray(), ['Bob', ''], 'items are updated');
      assert.dom(ITEM).exists({ count: 2 });

      await click(`${ITEM}:last-of-type ${DELETE_BUTTON}`);
      assert.deepEqual(this.items.toArray(), ['Bob']);
      assert.dom(ITEM).exists({ count: 1 });

      await fillIn(INPUT, 'Robert');
      assert.deepEqual(this.items.toArray(), ['Robert']);
      assert.dom(INPUT).hasValue('Robert');
    });
  });

  module('Boolean', function (hooks) {
    hooks.beforeEach(function () {
      this.set('items', A([true, false, true]));
    });

    test('Can display the checkboxes', async function (this: Context, assert) {
      await render(hbs`<Freestyle::Usage::Array
        @name="Updates"
        @type="Boolean"
        @description="A list of updates"
        @items={{this.items}}
        @onChange={{this.onChange}}
      />`);

      assert.dom(NAME).hasText('Updates');
      assert.dom(TYPE).hasText('[Boolean]');
      assert.dom(DESCRIPTION).containsText('A list of updates');
      assert.dom(ITEM).exists({ count: 3 });
      assert.dom(INPUT).hasAttribute('type', 'checkbox');

      await click(`${ITEM}:last-of-type input`);
      assert.deepEqual(this.items.toArray(), [true, false, false]);
    });
  });

  module('Number', function (hooks) {
    hooks.beforeEach(function () {
      this.set('items', A([1, 2, 3]));
    });

    test('Can display the numbers', async function (this: Context, assert) {
      await render(hbs`<Freestyle::Usage::Array
        @name="Scores"
        @type="Number"
        @description="A list of numbers"
        @items={{this.items}}
        @onChange={{this.onChange}}
      />`);

      assert.dom(NAME).hasText('Scores');
      assert.dom(TYPE).hasText('[Number]');
      assert.dom(DESCRIPTION).containsText('A list of numbers');
      assert.dom(ITEM).exists({ count: 3 });
      assert.dom(INPUT).hasAttribute('type', 'number');

      await fillIn(`${ITEM}:last-of-type input`, '20');
      assert.deepEqual(this.items.toArray(), [1, 2, 20]);
    });
  });

  module('Object', function (hooks) {
    hooks.beforeEach(function () {
      this.set('items', A([{ name: 'Bob' }, { name: 'Sue' }]));
    });

    test('Can be marked as readonly and not allow changes', async function (this: Context, assert) {
      await render(hbs`<Freestyle::Usage::Array
        @name="Users"
        @type="Object"
        @description="A list of users"
        @items={{this.items}}
        @onChange={{this.onChange}}
        @readOnly={{true}}
      />`);

      assert.dom(NAME).hasText('Users');
      assert.dom(TYPE).hasText('[Object]');
      assert.dom(DESCRIPTION).containsText('A list of users');
      assert.dom(ITEM).exists({ count: 2 });

      assert.dom(ADD_BUTTON).doesNotExist();
      assert.dom(DELETE_BUTTON).doesNotExist();
    });
  });
});
