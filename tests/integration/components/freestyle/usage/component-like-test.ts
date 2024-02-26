import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, select } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestContext } from '@ember/test-helpers';
import ProgressIcon from 'dummy/components/progress-icon';
import MarkdownContent from 'dummy/components/markdown-content';
import type { ComponentLike } from '@glint/template';

interface Context extends TestContext {
  value: ComponentLike;
  options?: ComponentLike[];
  onChange: (val?: ComponentLike) => void;
}

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const CONTROL = `${ARGUMENT}-controls--ComponentLike input`;
const SELECT_CONTROL = `${ARGUMENT}-controls--ComponentLike select`;

module(
  'Integration | Component | freestyle/usage/component-like',
  function (hooks) {
    setupRenderingTest(hooks);

    test('renders a select list', async function (this: Context, assert) {
      assert.expect(4);
      this.set('value', ProgressIcon);
      this.set('options', [ProgressIcon, MarkdownContent]);
      this.set('onChange', function (value: ComponentLike) {
        assert.strictEqual(value, MarkdownContent);
      });
      await render<Context>(hbs`<Freestyle::Usage::ComponentLike
      @name="Name"
      @value={{this.value}}
      @options={{this.options}}
      @onChange={{this.onChange}}
    />`);

      assert.dom(NAME).hasText('Name');
      assert.dom(SELECT_CONTROL).exists();
      assert.dom(SELECT_CONTROL).hasValue('ProgressIcon');
      await select(SELECT_CONTROL, 'MarkdownContent');
    });

    test('Does not render the controls', async function (this: Context, assert) {
      await render<Context>(hbs`<Freestyle::Usage::ComponentLike
      @hideControls={{true}}
      @onChange={{this.onChange}}
    />`);

      assert.dom(CONTROL).doesNotExist();
    });
  },
);
