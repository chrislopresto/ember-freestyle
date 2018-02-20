import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

module('Acceptance | section rendering', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function() {
    await freestyleGuide.visit();
  });

  test('verifying guide sections', (assert) => {
    assert.expect(4);

    assert.equal(freestyleGuide.content.sections().count, 3);
    assert.equal(freestyleGuide.content.sections(0).text, 'Foo Things');
    assert.equal(freestyleGuide.content.sections(1).text, 'Dynamic Properties');
    assert.equal(freestyleGuide.content.sections(2).text, 'Visual Style');
  });

  test('verifying guide subsections', (assert) => {
    assert.expect(6);

    let sectionFooThings = freestyleGuide.content.sections(0);
    assert.equal(sectionFooThings.subsections().count, 2);
    assert.equal(sectionFooThings.subsections(0).text, 'Foo Subsection A');
    assert.equal(sectionFooThings.subsections(1).text, 'Foo Subsection B');

    let sectionVisualStyle = freestyleGuide.content.sections(2);
    assert.equal(sectionVisualStyle.subsections().count, 2);
    assert.equal(sectionVisualStyle.subsections(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections(1).text, 'Color');
  });
});