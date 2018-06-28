import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';

moduleForAcceptance('Acceptance | section rendering', {
  async beforeEach() {
    await freestyleGuide.visit();
  }
});

test('verifying guide sections', async function(assert) {
  assert.expect(5);
  assert.equal(freestyleGuide.content.sections.length, 4, '4 sections rendered');
  assert.equal(freestyleGuide.content.sections.objectAt(0).text, 'Foo Things');
  assert.equal(freestyleGuide.content.sections.objectAt(1).text, 'Auto-Discovered');
  assert.equal(freestyleGuide.content.sections.objectAt(2).text, 'Dynamic Properties');
  assert.equal(freestyleGuide.content.sections.objectAt(3).text, 'Visual Style');
});

test('verifying guide subsections', async function(assert) {
  assert.expect(6);
  let sectionFooThings = freestyleGuide.content.sections.objectAt(0);
  assert.equal(sectionFooThings.subsections.length, 2, '2 subsections in first section');
  assert.equal(sectionFooThings.subsections.objectAt(0).text, 'Foo Subsection A');
  assert.equal(sectionFooThings.subsections.objectAt(1).text, 'Foo Subsection B');

  let sectionVisualStyle = freestyleGuide.content.sections.objectAt(3);
  assert.equal(sectionVisualStyle.subsections.length, 2, '2 subsections in fourth section');
  assert.equal(sectionVisualStyle.subsections.objectAt(0).text, 'Typography');
  assert.equal(sectionVisualStyle.subsections.objectAt(1).text, 'Color');
});

test('freestyle notes show up', async function(assert) {
  assert.expect(1);
  let sectionFooThings = freestyleGuide.content.sections.objectAt(0);
  let note = sectionFooThings.subsections.objectAt(0).collections.objectAt(0).variants.objectAt(0).noteContent[1];
  assert.ok(note.includes('Another Note About Normal'));
});
