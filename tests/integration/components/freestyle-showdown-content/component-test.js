import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module(
  'Integration | Component | freestyle-showdown-content',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders Markdown content as HTML', async function (assert) {
      await render(hbs`
        <FreestyleShowdownContent @text="# Foo" />
      `);

      assert.dom('h1').hasText('Foo');
    });
  }
);
