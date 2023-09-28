import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import EmberFreestyleService from 'ember-freestyle/services/ember-freestyle';
import { TestContext } from '@ember/test-helpers';
import { ContentValue } from '@glint/template';

interface Context extends TestContext {
  emberFreestyle: EmberFreestyleService;
  indentedFarBeforeBlankLine: ContentValue;
  afterBlankLine: ContentValue;
}

const SELECTOR = {
  FOCUS_CTA: '.FreestyleUsage-focusCta',
  RENDERED: '.FreestyleUsage-rendered',
  SOURCE_CONTAINER: '.FreestyleUsage-sourceContainer',
  TITLE: '.FreestyleUsage-title',
  USAGE: '.FreestyleUsage-usage',
};

module('Integration | Component | freestyle-usage', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: Context) {
    this.emberFreestyle = this.owner.lookup(
      'service:ember-freestyle',
    ) as EmberFreestyleService;
  });

  test('it renders the block source', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA">
        hello from component A
      </FreestyleUsage>
    `);

    assert
      .dom(SELECTOR.SOURCE_CONTAINER)
      .hasText('Source hello from component A');
  });

  test('it renders the title and the focus button if a title is passed in and the guide is set to show labels', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA" @title="Title A">
        hello from component A
      </FreestyleUsage>
    `);

    assert.dom(SELECTOR.TITLE).hasText('Title A');
    assert.dom(SELECTOR.TITLE).exists({ count: 1 });
    assert.dom(SELECTOR.FOCUS_CTA).exists({ count: 1 });
  });

  test('it does not render the title if the guide is set to not show labels', async function (this: Context, assert) {
    this.emberFreestyle.showLabels = false;

    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA" @title="Title A">
        hello from component A
      </FreestyleUsage>
    `);

    assert.dom(SELECTOR.TITLE).doesNotExist();
    assert.dom(SELECTOR.FOCUS_CTA).doesNotExist();
  });

  test('it renders the passed in block', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA">
        hello from component A
      </FreestyleUsage>
    `);

    assert.dom(SELECTOR.RENDERED).hasText('hello from component A');
  });

  test('it ignores blank lines when unindenting', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA">
        {{this.indentedFarBeforeBlankLine}}

        {{this.afterBlankLine}}
      </FreestyleUsage>
    `);

    const sourceContainer = find(SELECTOR.SOURCE_CONTAINER) as HTMLElement;

    const sourceNodes = sourceContainer.innerText.trim().split('\n');
    const lastSourceNode = sourceNodes[sourceNodes.length - 1];

    assert.strictEqual(lastSourceNode, '{{this.afterBlankLine}}');
  });

  test('it does not render anything if the slug does not match the focus', async function (this: Context, assert) {
    this.emberFreestyle.focus = 'someOtherComponent';

    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA" @title="Title A">
        hello from component A
      </FreestyleUsage>
    `);

    assert.dom(SELECTOR.TITLE).doesNotExist();
    assert.dom(SELECTOR.FOCUS_CTA).doesNotExist();
    assert.dom(SELECTOR.USAGE).doesNotExist();
  });

  test('it renders the passed in block for angle bracket components', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestyleUsage @slug="componentA">
        hello from component A
      </FreestyleUsage>
    `);

    assert.dom(SELECTOR.RENDERED).hasText('hello from component A');
  });
});
