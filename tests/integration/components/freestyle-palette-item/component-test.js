import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

module('Integration | Component | freestyle palette item', function (hooks) {
  setupRenderingTest(hooks);

  test('it has a base background color', async function (assert) {
    assert.expect(1);

    this.set('color', {
      base: '#abcdef',
    });

    await render(hbs`{{freestyle-palette-item color=color}}`);

    let backgroundColorStyle = 'style="background-color: #abcdef;"';
    assert.ok(
      find('.FreestylePaletteItem').innerHTML.indexOf(backgroundColorStyle) > -1
    );
  });
});
