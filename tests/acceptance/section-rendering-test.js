import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleGuide from '../pages/freestyle-guide';

module('Acceptance | section rendering', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await freestyleGuide.visit();
  });

  test('verifying guide sections', function (assert) {
    assert.expect(6);
    assert.equal(freestyleGuide.content.visibleSections.length, 5);
    assert.equal(
      freestyleGuide.content.visibleSections.objectAt(0).text,
      'Albums'
    );
    assert.equal(
      freestyleGuide.content.visibleSections.objectAt(2).text,
      'Foo Things'
    );
    assert.equal(
      freestyleGuide.content.visibleSections.objectAt(3).text,
      'Dynamic Properties'
    );
    assert.equal(
      freestyleGuide.content.visibleSections.objectAt(4).text,
      'Visual Style'
    );
    assert.dom('[data-test-choose-section]').doesNotExist();
  });

  test('verifying guide subsections', function (assert) {
    assert.expect(6);
    let sectionFooThings = freestyleGuide.content.visibleSections.objectAt(2);
    assert.equal(sectionFooThings.visibleSubsections.length, 2);
    assert.equal(
      sectionFooThings.visibleSubsections.objectAt(0).text,
      'Foo Subsection A'
    );
    assert.equal(
      sectionFooThings.visibleSubsections.objectAt(1).text,
      'Foo Subsection B'
    );

    let sectionVisualStyle = freestyleGuide.content.visibleSections.objectAt(4);
    assert.equal(sectionVisualStyle.visibleSubsections.length, 2);
    assert.equal(
      sectionVisualStyle.visibleSubsections.objectAt(0).text,
      'Typography'
    );
    assert.equal(
      sectionVisualStyle.visibleSubsections.objectAt(1).text,
      'Color'
    );
  });

  test('freestyle annotations show up', function (assert) {
    assert.expect(1);
    let sectionFooThings = freestyleGuide.content.visibleSections.objectAt(2);
    assert.ok(
      sectionFooThings.visibleSubsections
        .objectAt(0)
        .collections.objectAt(0)
        .variants.objectAt(0)
        .annotationContains('A Note About Normal'),
      'Normal annotation renders'
    );
  });

  module('with allowRenderingAllSections set to false', function (hooks) {
    hooks.beforeEach(async function () {
      let service = this.owner.lookup('service:ember-freestyle');
      service.allowRenderingAllSections = false;
    });
    test('verifying guide sections', async function (assert) {
      assert.expect(3);
      assert.equal(
        freestyleGuide.content.visibleSections.length,
        0,
        'Sections should be hidden'
      );
      assert.equal(
        freestyleGuide.content.allVisibleSubsections.length,
        0,
        'Subsections should be hidden'
      );
      assert.dom('[data-test-choose-section]').exists();
    });
  });
});
