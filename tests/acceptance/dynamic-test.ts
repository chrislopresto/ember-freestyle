import { click, fillIn, select, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

function selector(childSelector: string) {
  return `[data-test-section="dynamic"] ${childSelector}`;
}

const SELECTOR = {
  BAR: selector('.x-Bar'),
  BAR_DESCRIPTION: selector('.x-Bar-description'),
  BAR_RANK: selector('.x-Bar-rank'),
  CHECKBOX_TASTEFUL: selector('input[type="checkbox"]:not(:checked)'),
  CHECKBOX_VISIBLE: selector('input[type="checkbox"]'),
  INPUT_RANK: selector('input[type="number"]'),
  SELECT_SIZE: selector('select'),
  SOURCE_CONTAINER: selector('.FreestyleUsage-sourceContainer'),
  TEXTAREA_CONTENT: selector('textarea'),
};

module('Acceptance | dynamic', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/acceptance?s=Dynamic Properties');
  });

  test('block content', async function (assert) {
    assert.dom(SELECTOR.TEXTAREA_CONTENT).hasValue('Dynamic Block Content');

    assert
      .dom(SELECTOR.BAR_DESCRIPTION)
      .hasText(
        'Dynamic Block Content Static block content Reference another dynamic prop in block: is tasteful: false',
      );

    assert
      .dom(SELECTOR.SOURCE_CONTAINER)
      .includesText('<p>Dynamic Block Content</p>')
      .includesText('<p>Static block content</p>')
      .includesText(
        '<p> Reference another dynamic prop in block: is tasteful: false </p>',
      );

    await fillIn(SELECTOR.TEXTAREA_CONTENT, 'Something new');

    assert
      .dom(SELECTOR.BAR_DESCRIPTION)
      .hasText(
        'Something new Static block content Reference another dynamic prop in block: is tasteful: false',
      );

    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText('<p>Something new</p>');

    await click(SELECTOR.CHECKBOX_TASTEFUL);

    assert
      .dom(SELECTOR.BAR_DESCRIPTION)
      .hasText(
        'Something new Static block content Reference another dynamic prop in block: is tasteful: true',
      );
  });

  test('select input', async function (assert) {
    assert.dom(SELECTOR.SELECT_SIZE).hasValue('medium');
    assert.dom(SELECTOR.BAR).hasClass('x-Bar--medium');
    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText(`@size='medium'`);

    await select(SELECTOR.SELECT_SIZE, 'small');

    assert.dom(SELECTOR.SELECT_SIZE).hasValue('small');
    assert.dom(SELECTOR.BAR).hasClass('x-Bar--small');
    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText(`@size='small'`);
  });

  test('number input', async function (assert) {
    assert.dom(SELECTOR.INPUT_RANK).hasValue('10');
    assert.dom(SELECTOR.BAR_RANK).hasText('10');
    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText('@rank={{10}}');

    await fillIn(SELECTOR.INPUT_RANK, '5');

    assert.dom(SELECTOR.INPUT_RANK).hasValue('5');
    assert.dom(SELECTOR.BAR_RANK).hasText('5');
    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText('@rank={{5}}');
  });

  test('checkbox input', async function (assert) {
    assert.dom(SELECTOR.CHECKBOX_VISIBLE).isChecked();
    assert.dom(SELECTOR.BAR_RANK).isVisible();
    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText('@isVisible={{true}}');

    await click(SELECTOR.CHECKBOX_VISIBLE);

    assert.dom(SELECTOR.CHECKBOX_VISIBLE).isNotChecked();
    assert.dom(SELECTOR.BAR_RANK).isNotVisible();
    assert.dom(SELECTOR.SOURCE_CONTAINER).includesText('@isVisible={{false}}');
  });
});
