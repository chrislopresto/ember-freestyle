import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = {
  FOCUS_CTA: '.FreestyleUsage-focusCta',
  RENDERED: '.FreestyleUsage-rendered',
  SOURCE_CONTAINER: '.FreestyleUsage-sourceContainer',
  TITLE: '.FreestyleUsage-title',
  USAGE: '.FreestyleUsage-usage',
};

module('Integration | Component | freestyle-usage', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.emberFreestyle = this.owner.lookup('service:ember-freestyle');
  });

  test('it renders the block source', async function (assert) {
    await render(hbs`
      {{#freestyle-usage "componentA"}}
        hello from component A
      {{/freestyle-usage}}
    `);

    assert
      .dom(SELECTOR.SOURCE_CONTAINER)
      .hasText('Source hello from component A');
  });

  test('it renders the title and the focus button if a title is passed in and the guide is set to show labels', async function (assert) {
    await render(hbs`
      {{#freestyle-usage "componentA" title="Title A"}}
        hello from component A
      {{/freestyle-usage}}
    `);

    assert.dom(SELECTOR.TITLE).hasText('Title A');
    assert.dom(SELECTOR.TITLE).exists({ count: 1 });
    assert.dom(SELECTOR.FOCUS_CTA).exists({ count: 1 });
  });

  test('it does not render the title if the guide is set to not show labels', async function (assert) {
    this.emberFreestyle.showLabels = false;

    await render(hbs`
      {{#freestyle-usage "componentA" title="Title A"}}
        hello from component A
      {{/freestyle-usage}}
    `);

    assert.dom(SELECTOR.TITLE).doesNotExist();
    assert.dom(SELECTOR.FOCUS_CTA).doesNotExist();
  });

  test('it renders the passed in block', async function (assert) {
    await render(hbs`
      {{#freestyle-usage "componentA"}}
        hello from component A
      {{/freestyle-usage}}
    `);

    assert.dom(SELECTOR.RENDERED).hasText('hello from component A');
  });

  test('it ignores blank lines when unindenting', async function (assert) {
    await render(hbs`
      <FreestyleUsage @slug="componentA">
        {{this.indentedFarBeforeBlankLine}}

        {{this.afterBlankLine}}
      </FreestyleUsage>
    `);

    const sourceContainer = this.element.querySelector(
      SELECTOR.SOURCE_CONTAINER
    );

    const sourceNodes = sourceContainer.innerText.trim().split('\n');
    const lastSourceNode = sourceNodes[sourceNodes.length - 1];

    assert.equal(lastSourceNode, '{{this.afterBlankLine}}');
  });

  test('it does not render anything if the slug does not match the focus', async function (assert) {
    this.emberFreestyle.focus = 'someOtherComponent';

    await render(hbs`
      {{#freestyle-usage "componentA" title="Title A"}}
        hello from component A
      {{/freestyle-usage}}
    `);

    assert.dom(SELECTOR.TITLE).doesNotExist();
    assert.dom(SELECTOR.FOCUS_CTA).doesNotExist();
    assert.dom(SELECTOR.USAGE).doesNotExist();
  });

  test('it renders the passed in block for angle bracket components', async function (assert) {
    await render(hbs`
      <FreestyleUsage @slug="componentA">
        hello from component A
      </FreestyleUsage>
    `);

    assert.dom(SELECTOR.RENDERED).hasText('hello from component A');
  });
});
