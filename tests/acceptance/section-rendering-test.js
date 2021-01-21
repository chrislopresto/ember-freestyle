import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

module('Acceptance | section rendering', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await freestyleGuide.visit();
  });

  test('verifying guide sections', (assert) => {
    assert.expect(5);
    assert.equal(freestyleGuide.content.sections.length, 4);
    assert.equal(freestyleGuide.content.sections.objectAt(0).text, 'Albums');
    assert.equal(
      freestyleGuide.content.sections.objectAt(1).text,
      'Foo Things'
    );
    assert.equal(
      freestyleGuide.content.sections.objectAt(2).text,
      'Dynamic Properties'
    );
    assert.equal(
      freestyleGuide.content.sections.objectAt(3).text,
      'Visual Style'
    );
  });

  test('verifying guide subsections', (assert) => {
    assert.expect(6);
    let sectionFooThings = freestyleGuide.content.sections.objectAt(1);
    assert.equal(sectionFooThings.subsections.length, 2);
    assert.equal(
      sectionFooThings.subsections.objectAt(0).text,
      'Foo Subsection A'
    );
    assert.equal(
      sectionFooThings.subsections.objectAt(1).text,
      'Foo Subsection B'
    );

    let sectionVisualStyle = freestyleGuide.content.sections.objectAt(3);
    assert.equal(sectionVisualStyle.subsections.length, 2);
    assert.equal(sectionVisualStyle.subsections.objectAt(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections.objectAt(1).text, 'Color');
  });

  test('freestyle annotations show up', (assert) => {
    assert.expect(1);
    let sectionFooThings = freestyleGuide.content.sections.objectAt(1);
    assert.ok(
      sectionFooThings.subsections
        .objectAt(0)
        .collections.objectAt(0)
        .variants.objectAt(0)
        .annotationContains('A Note About Normal'),
      'Normal annotation renders'
    );
  });
});
