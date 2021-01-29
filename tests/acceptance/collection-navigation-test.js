import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

let variantKeys = A([
  'normal',
  'special',
  'hyper',
  'classic',
  'elegant',
  'tasteful',
]);

module('Acceptance | collection navigation', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await freestyleGuide.visit();
  });

  test('verifying variantListItem selection', async (assert) => {
    assert.expect(36);

    let fooCollection = freestyleGuide.content.sections
      .objectAt(1)
      .subsections.objectAt(0)
      .collections.objectAt(0);

    for (let idx = 0; idx < variantKeys.length; idx++) {
      let activeVariant = variantKeys[idx];

      await fooCollection.selectVariant(activeVariant);
      assert.equal(
        fooCollection.variants.objectAt(idx).usageTitle.toLowerCase(),
        activeVariant
      );
      variantKeys
        .reject((each) => {
          return each === activeVariant;
        })
        .map((otherVariant) => {
          let otherIndex = variantKeys.indexOf(otherVariant);
          assert.equal(fooCollection.variants.objectAt(otherIndex).text, '');
        });
    }
  });
});
