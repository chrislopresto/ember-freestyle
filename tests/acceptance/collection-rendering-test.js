/* global expect */
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';
import Ember from 'ember';

moduleForAcceptance('Acceptance | collection rendering', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying freestyle collection', (assert) => {
  expect(19);
  andThen(() => {
    let sectionFooThings = freestyleGuide.content.sections(0);
    assert.equal(sectionFooThings.subsections(0).collections().count, 1);

    let fooCollection = sectionFooThings.subsections(0).collections(0);
    assert.equal(fooCollection.title, 'Foo Collection');

    // variantListItems have all variants plus an 'all' choice at he front of the list
    assert.equal(fooCollection.variantListItems().count, 7);
    assert.equal(fooCollection.variantListItems(0).text, 'all');
    assert.equal(fooCollection.variantListItems(1).text, 'normal');
    assert.equal(fooCollection.variantListItems(2).text, 'special');
    assert.equal(fooCollection.variantListItems(3).text, 'hyper');
    assert.equal(fooCollection.variantListItems(4).text, 'classic');
    assert.equal(fooCollection.variantListItems(5).text, 'elegant');
    assert.equal(fooCollection.variantListItems(6).text, 'tasteful');

    // we start with 'normal' as the default key
    assert.ok(fooCollection.activeVariantListItemLabel('normal'));
    assert.equal(fooCollection.variants().count, 6);

    // which displays only the (first) normal variant
    assert.ok(fooCollection.variants(0).annotationContains('A Note About Normal'));
    assert.equal(fooCollection.variants(0).usageTitle, 'Normal');

    // and all others are empty
    Ember.A([1,2,3,4,5]).forEach((idx) => {
      assert.equal(fooCollection.variants(idx).text, '');
    });
  });
});
