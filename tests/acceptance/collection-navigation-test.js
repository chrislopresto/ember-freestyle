import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';

let fooCollection;

let variantListItems = {
  normal:   ['Normal', '', '', '', '', ''],
  special:  ['', 'Special', '', '', '', ''],
  hyper:    ['', '', 'Hyper', '', '', ''  ],
  classic:  ['', '', '', 'Classic', '', ''],
  elegant:  ['', '', '', '', 'Elegant', '' ],
  tasteful: ['', '', '', '', '', 'Tasteful']
};

moduleForAcceptance('Acceptance | collection navigation', {
  beforeEach() {
    freestyleGuide.visit();
    andThen(() => {
      fooCollection = freestyleGuide.content.sections(0).subsections(0).collections(0);
    });
  }
});

test('verifying variantListItem selection', (assert) => {
  Object.keys(variantListItems).forEach((k) => {

    fooCollection.variantListItems().selectVariant(k);

    andThen(() => {
      let renderedUsageTitles = variantListItems[k];
      renderedUsageTitles.forEach((title, idx) => {
        if (title) {
          assert.equal(fooCollection.variants(idx).usageTitle, title);
        } else {
          assert.equal(fooCollection.variants(idx).text, title);
        }
      });
    });
  });

});
