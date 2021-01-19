import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ARGUMENT = '.FreestyleUsageArgument';
const NAME = `${ARGUMENT}-name`;
const PREVIEW = `${ARGUMENT}-controls--Object .json-viewer`;

module('Integration | Component | freestyle/usage/object', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a json viewer', async function (assert) {
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
      @jsonCollapseDepth={{1}}
    />`);

    assert.dom(NAME).containsText('Collectibles');
    assert.dom(PREVIEW).containsText('widgets');
    assert.dom(PREVIEW).containsText('presser');
    assert.dom(PREVIEW).containsText('dimensions');
    assert.dom(PREVIEW).doesNotContainText('width');
  });
});
