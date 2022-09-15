import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  description?: string;
  name?: string;
  type?: string;
  typeLabel?: string;
  required?: boolean;
  hideControls?: boolean;
}

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const TYPE = `${ARGUMENT}-type`;
const DESCRIPTION = `${ARGUMENT}-description`;
const DETAILS = `${ARGUMENT}-details`;
const REQUIRED = `${ARGUMENT}-required`;
const CONTROLS = `${ARGUMENT}-controls`;

module('Integration | Component | freestyle/usage/argument', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: Context) {
    this.setProperties({
      name: 'Argument Name',
      type: 'String',
      description: 'Useful Information',
      required: true,
      hideControls: true,
    });
  });

  async function renderComponent() {
    return render(hbs`
      <Freestyle::Usage::Argument
        @name={{this.name}}
        @type={{this.type}}
        @description={{this.description}}
        @defaultValue={{this.defaultValue}}
        @required={{this.required}}
        @hideControls={{this.hideControls}}
      />
    `);
  }

  test('it renders a basic table row', async function (assert) {
    await renderComponent();
    assert.dom(ARGUMENT).exists();
    assert.dom(NAME).hasText('Argument Name');
    assert.dom(TYPE).exists();
    assert.dom(DESCRIPTION).hasText('String Useful Information');
    assert.dom(REQUIRED).hasText('Required');
  });

  module('when default value', function (hooks) {
    hooks.beforeEach(function () {
      this.setProperties({
        required: false,
        defaultValue: 'A default',
      });
    });

    test('it renders the default value', async function (assert) {
      await renderComponent();

      assert.dom(DETAILS).hasText('A default');
    });
  });

  module('accepts yields for custom controls', function () {
    test('renders the controls', async function (this: Context, assert) {
      await render(hbs`
        <Freestyle::Usage::Argument
          @name={{this.name}}
          @type={{this.type}}
          @description={{this.description}}
          @defaultValue={{this.defaultValue}}
          @required={{this.required}}
          @hideControls={{false}}
        >
          <div class="a-control">Hi!</div>
        </Freestyle::Usage::Argument>
      `);

      assert.dom(CONTROLS).hasText('Hi!');
    });
  });
});
