import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

module('Acceptance | section rendering', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    freestyleGuide.visit();
  });

  test('verifying guide sections', (assert) => {
    assert.expect(4);
    assert.equal(freestyleGuide.content.sections.length, 3);
    assert.equal(freestyleGuide.content.sections.objectAt(0).text, 'Foo Things');
    assert.equal(freestyleGuide.content.sections.objectAt(1).text, 'Dynamic Properties');
    assert.equal(freestyleGuide.content.sections.objectAt(2).text, 'Visual Style');
  });

  test('verifying guide subsections', (assert) => {
    assert.expect(6);
    let sectionFooThings = freestyleGuide.content.sections.objectAt(0);
    assert.equal(sectionFooThings.subsections.length, 2);
    assert.equal(sectionFooThings.subsections.objectAt(0).text, 'Foo Subsection A');
    assert.equal(sectionFooThings.subsections.objectAt(1).text, 'Foo Subsection B');

    let sectionVisualStyle = freestyleGuide.content.sections.objectAt(2);
    assert.equal(sectionVisualStyle.subsections.length, 2);
    assert.equal(sectionVisualStyle.subsections.objectAt(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections.objectAt(1).text, 'Color');
  });

  test('freestyle notes show up', (assert) => {
    assert.expect(1);
    let sectionFooThings = freestyleGuide.content.sections.objectAt(0);
    let note = sectionFooThings.subsections.objectAt(0).collections.objectAt(0).variants.objectAt(0).noteContent[1];

    assert.ok(note.includes('Another Note About Normal'));
  })
});
