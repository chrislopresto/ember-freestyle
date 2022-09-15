import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}
const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const PREVIEW = `${ARGUMENT}-controls--Object .FreestyleUsageArgument-jsonViewer`;

module('Integration | Component | freestyle/usage/object', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a json viewer', async function (this: Context, assert) {
    assert.expect(5);
    this.set('value', {
      widgets: [
        { type: 'whazzit' },
        { type: 'howzit', method: 'twister' },
        {
          type: 'howzit',
          method: 'presser',
          dimensions: {
            width: 20,
            height: 40,
            depth: 35,
          },
        },
      ],
    });
    await render(hbs`<Freestyle::Usage::Object
      @name="Collectibles"
      @value={{this.value}}
      @jsonCollapseDepth={{3}}
    />`);

    assert.dom(NAME).containsText('Collectibles');
    assert.dom(PREVIEW).containsText('widgets');
    assert.dom(PREVIEW).containsText('presser');
    assert.dom(PREVIEW).containsText('dimensions');
    assert.dom(PREVIEW).doesNotContainText('width');
  });
});
