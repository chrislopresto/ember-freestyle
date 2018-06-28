import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';

moduleForAcceptance('Acceptance | section navigation', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying header', (assert) => {
  assert.expect(2);
  andThen(() => {
    assert.equal(freestyleGuide.header.title, 'Ember Freestyle');
    assert.equal(freestyleGuide.header.subtitle, 'Living Style Guide');
  });
});

test('verifying menu sections', (assert) => {
  assert.expect(6);
  andThen(() => {
    assert.equal(freestyleGuide.menu.sections.length, 5);
    assert.equal(freestyleGuide.menu.sections.objectAt(0).text, 'All');
    assert.equal(freestyleGuide.menu.sections.objectAt(1).text, 'Foo Things');
    assert.equal(freestyleGuide.menu.sections.objectAt(2).text, 'Auto-Discovered');
    assert.equal(freestyleGuide.menu.sections.objectAt(3).text, 'Dynamic Properties');
    assert.equal(freestyleGuide.menu.sections.objectAt(4).text, 'Visual Style');
  });
});

test('navigating directly to a subsection', function(assert) {
  assert.expect(6);
  andThen(() => {
    let sectionFooThings = freestyleGuide.menu.sections.objectAt(1);
    assert.equal(sectionFooThings.subsections.length, 2);
    assert.equal(sectionFooThings.subsections.objectAt(0).text, 'Foo Subsection A');
    assert.equal(sectionFooThings.subsections.objectAt(1).text, 'Foo Subsection B');

    let sectionVisualStyle = freestyleGuide.menu.sections.objectAt(4);
    assert.equal(sectionVisualStyle.subsections.length, 2);
    assert.equal(sectionVisualStyle.subsections.objectAt(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections.objectAt(1).text, 'Color');
  });
});
