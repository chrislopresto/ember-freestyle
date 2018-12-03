import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

let variantKeys = A(['normal', 'special', 'hyper', 'classic', 'elegant', 'tasteful']);

module('Acceptance | collection navigation', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    freestyleGuide.visit();
  });

  test('verifying variantListItem selection', (assert) => {
    assert.expect(36);

    let fooCollection = freestyleGuide.content.sections.objectAt(0).subsections.objectAt(0).collections.objectAt(0);

    variantKeys.forEach((activeVariant, idx) => {
      fooCollection.selectVariant(activeVariant);
      assert.equal(fooCollection.variants.objectAt(idx).usageTitle.toLowerCase(), activeVariant);
      variantKeys.reject((each) => {
        return each === activeVariant;
      }).map((otherVariant) => {
        let otherIndex = variantKeys.indexOf(otherVariant);
        assert.equal(fooCollection.variants.objectAt(otherIndex).text, '');
      });
    });

  });
});
