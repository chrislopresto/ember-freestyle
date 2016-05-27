/* global expect */
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';

moduleForAcceptance('Acceptance | section navigation', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying header', (assert) => {
  expect(2);
  andThen(() => {
    assert.equal(freestyleGuide.header.title, 'Ember Freestyle');
    assert.equal(freestyleGuide.header.subtitle, 'Living Style Guide');
  });
});

test('verifying menu sections', (assert) => {
  expect(4);
  andThen(() => {
    assert.equal(freestyleGuide.menu.sections().count, 3);
    assert.equal(freestyleGuide.menu.sections(0).text, 'All');
    assert.equal(freestyleGuide.menu.sections(1).text, 'Foo Things');
    assert.equal(freestyleGuide.menu.sections(2).text, 'Visual Style');
  });
});

test('navigating directly to a subsection', function(assert) {
  expect(6);
  andThen(() => {
    let sectionFooThings = freestyleGuide.menu.sections(1);
    assert.equal(sectionFooThings.subsections().count, 2);
    assert.equal(sectionFooThings.subsections(0).text, 'Foo Subsection A');
    assert.equal(sectionFooThings.subsections(1).text, 'Foo Subsection B');

    let sectionVisualStyle = freestyleGuide.menu.sections(2);
    assert.equal(sectionVisualStyle.subsections().count, 2);
    assert.equal(sectionVisualStyle.subsections(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections(1).text, 'Color');
  });
});
