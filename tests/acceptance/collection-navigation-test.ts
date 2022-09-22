import { click, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = {
  USAGE_TITLE: '.FreestyleUsage-title',
  VARIANT: '.FreestyleVariant',
  VARIANT_ITEM_ALL: '.FreestyleCollection-variantListItem:nth-child(1)',
  VARIANT_ITEM_CLASSIC: '.FreestyleCollection-variantListItem:nth-child(5)',
  VARIANT_ITEM_ELEGANT: '.FreestyleCollection-variantListItem:nth-child(6)',
  VARIANT_ITEM_HYPER: '.FreestyleCollection-variantListItem:nth-child(4)',
  VARIANT_ITEM_NORMAL: '.FreestyleCollection-variantListItem:nth-child(2)',
  VARIANT_ITEM_SPECIAL: '.FreestyleCollection-variantListItem:nth-child(3)',
  VARIANT_ITEM_TASTEFUL: '.FreestyleCollection-variantListItem:nth-child(7)',
};

module('Acceptance | collection navigation', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/acceptance?s=Foo Things&ss=Foo Subsection A');
  });

  test('verifying variant selection', async function (assert) {
    const variants = this.element.querySelectorAll(SELECTOR.VARIANT);

    await click(SELECTOR.VARIANT_ITEM_ALL);
    assert.dom(variants[0]).isVisible();
    assert.dom(variants[1]).isVisible();
    assert.dom(variants[2]).isVisible();
    assert.dom(variants[3]).isVisible();
    assert.dom(variants[4]).isVisible();
    assert.dom(variants[5]).isVisible();

    await click(SELECTOR.VARIANT_ITEM_NORMAL);
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Normal');
    assert.dom(variants[1]).isNotVisible();
    assert.dom(variants[2]).isNotVisible();
    assert.dom(variants[3]).isNotVisible();
    assert.dom(variants[4]).isNotVisible();
    assert.dom(variants[5]).isNotVisible();

    await click(SELECTOR.VARIANT_ITEM_SPECIAL);
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Special');
    assert.dom(variants[0]).isNotVisible();
    assert.dom(variants[2]).isNotVisible();
    assert.dom(variants[3]).isNotVisible();
    assert.dom(variants[4]).isNotVisible();
    assert.dom(variants[5]).isNotVisible();

    await click(SELECTOR.VARIANT_ITEM_HYPER);
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Hyper');
    assert.dom(variants[0]).isNotVisible();
    assert.dom(variants[1]).isNotVisible();
    assert.dom(variants[3]).isNotVisible();
    assert.dom(variants[4]).isNotVisible();
    assert.dom(variants[5]).isNotVisible();

    await click(SELECTOR.VARIANT_ITEM_CLASSIC);
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Classic');
    assert.dom(variants[0]).isNotVisible();
    assert.dom(variants[1]).isNotVisible();
    assert.dom(variants[2]).isNotVisible();
    assert.dom(variants[4]).isNotVisible();
    assert.dom(variants[5]).isNotVisible();

    await click(SELECTOR.VARIANT_ITEM_ELEGANT);
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Elegant');
    assert.dom(variants[0]).isNotVisible();
    assert.dom(variants[1]).isNotVisible();
    assert.dom(variants[2]).isNotVisible();
    assert.dom(variants[3]).isNotVisible();
    assert.dom(variants[5]).isNotVisible();

    await click(SELECTOR.VARIANT_ITEM_TASTEFUL);
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Tasteful');
    assert.dom(variants[0]).isNotVisible();
    assert.dom(variants[1]).isNotVisible();
    assert.dom(variants[2]).isNotVisible();
    assert.dom(variants[3]).isNotVisible();
    assert.dom(variants[4]).isNotVisible();
  });
});
