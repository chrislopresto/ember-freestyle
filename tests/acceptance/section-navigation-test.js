import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

module('Acceptance | section navigation', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    freestyleGuide.visit();
  });

  test('verifying header', (assert) => {
    assert.expect(2);
    assert.equal(freestyleGuide.header.title, 'Ember Freestyle');
    assert.equal(freestyleGuide.header.subtitle, 'Living Style Guide');
  });

  test('verifying menu sections', (assert) => {
    assert.expect(5);
    assert.equal(freestyleGuide.menu.sections.length, 4);
    assert.equal(freestyleGuide.menu.sections.objectAt(0).text, 'All');
    assert.equal(freestyleGuide.menu.sections.objectAt(1).text, 'Foo Things');
    assert.equal(freestyleGuide.menu.sections.objectAt(2).text, 'Dynamic Properties');
    assert.equal(freestyleGuide.menu.sections.objectAt(3).text, 'Visual Style');
  });

  test('navigating directly to a subsection', function(assert) {
    assert.expect(6);
    let sectionFooThings = freestyleGuide.menu.sections.objectAt(1);
    assert.equal(sectionFooThings.subsections.length, 2);
    assert.equal(sectionFooThings.subsections.objectAt(0).text, 'Foo Subsection A');
    assert.equal(sectionFooThings.subsections.objectAt(1).text, 'Foo Subsection B');

    let sectionVisualStyle = freestyleGuide.menu.sections.objectAt(3);
    assert.equal(sectionVisualStyle.subsections.length, 2);
    assert.equal(sectionVisualStyle.subsections.objectAt(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections.objectAt(1).text, 'Color');
  });
});
