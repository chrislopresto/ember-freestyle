import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = {
  ANNOTATION: '.FreestyleAnnotation',
  COLLECTION: '.FreestyleCollection',
  COLLECTION_TITLE: '.FreestyleCollection-title',
  USAGE_TITLE: '.FreestyleUsage-title',
  VARIANT: '.FreestyleVariant',
  VARIANT_ITEM: '.FreestyleCollection-variantListItem',
  VARIANT_ITEM_ACTIVE: '.FreestyleCollection-variantListItem--active',
  VARIANT_ITEM_ALL: '.FreestyleCollection-variantListItem:nth-child(1)',
  VARIANT_ITEM_CLASSIC: '.FreestyleCollection-variantListItem:nth-child(5)',
  VARIANT_ITEM_ELEGANT: '.FreestyleCollection-variantListItem:nth-child(6)',
  VARIANT_ITEM_HYPER: '.FreestyleCollection-variantListItem:nth-child(4)',
  VARIANT_ITEM_NORMAL: '.FreestyleCollection-variantListItem:nth-child(2)',
  VARIANT_ITEM_SPECIAL: '.FreestyleCollection-variantListItem:nth-child(3)',
  VARIANT_ITEM_TASTEFUL: '.FreestyleCollection-variantListItem:nth-child(7)',
};

module('Acceptance | collection rendering', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/acceptance?s=Foo Things&ss=Foo Subsection A');
  });

  test('verifying freestyle collection', async function (assert) {
    assert.dom(SELECTOR.COLLECTION).exists({ count: 1 });
    assert.dom(SELECTOR.COLLECTION_TITLE).hasText('Foo Collection');

    assert.dom(SELECTOR.VARIANT_ITEM).exists({ count: 7 });
    assert.dom(SELECTOR.VARIANT_ITEM_ALL).hasText('all');
    assert.dom(SELECTOR.VARIANT_ITEM_ACTIVE).hasText('normal');
    assert.dom(SELECTOR.VARIANT_ITEM_NORMAL).hasText('normal');
    assert.dom(SELECTOR.VARIANT_ITEM_SPECIAL).hasText('special');
    assert.dom(SELECTOR.VARIANT_ITEM_HYPER).hasText('hyper');
    assert.dom(SELECTOR.VARIANT_ITEM_CLASSIC).hasText('classic');
    assert.dom(SELECTOR.VARIANT_ITEM_ELEGANT).hasText('elegant');
    assert.dom(SELECTOR.VARIANT_ITEM_TASTEFUL).hasText('tasteful');

    assert.dom(SELECTOR.VARIANT).exists({ count: 6 });
    assert.dom(SELECTOR.ANNOTATION).includesText('A Note About Normal');
    assert.dom(SELECTOR.USAGE_TITLE).hasText('Normal');

    const variants = this.element.querySelectorAll(SELECTOR.VARIANT);

    assert.dom(variants[1]).isNotVisible();
    assert.dom(variants[2]).isNotVisible();
    assert.dom(variants[3]).isNotVisible();
    assert.dom(variants[4]).isNotVisible();
    assert.dom(variants[5]).isNotVisible();
  });
});
