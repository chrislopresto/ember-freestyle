/* global expect */
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';
import Ember from 'ember';

let variantKeys = Ember.A(['normal', 'special', 'hyper', 'classic', 'elegant', 'tasteful']);

moduleForAcceptance('Acceptance | collection navigation', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying variantListItem selection', (assert) => {
  expect(36);

  let fooCollection = freestyleGuide.content.sections(0).subsections(0).collections(0);

  variantKeys.forEach((activeVariant, idx) => {
    fooCollection.variantListItems().selectVariant(activeVariant);
    andThen(() => {
      assert.equal(fooCollection.variants(idx).usageTitle.toLowerCase(), activeVariant);
      variantKeys.reject((each) => {
        return each === activeVariant;
      }).map((otherVariant) => {
        let otherIndex = variantKeys.indexOf(otherVariant);
        assert.equal(fooCollection.variants(otherIndex).text, '');
      });
    });
  });

});
