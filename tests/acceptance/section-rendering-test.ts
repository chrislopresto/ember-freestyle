import { settled, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import EmberFreestyleService from '../../addon/services/ember-freestyle';

const SELECTOR = {
  ANNOTATION: '.FreestyleAnnotation',
  SECTION_NAME: '.FreestyleSection-name',
  SECTION_SHOWING: '.FreestyleSection--showing',
  SUBSECTION_NAME: '.FreestyleSubsection-name',
  SUBSECTION_SHOWING: '.FreestyleSubsection.is-showing',
};

module('Acceptance | section rendering', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/acceptance');
  });

  test('verifying guide sections', function (assert) {
    assert.dom(SELECTOR.SECTION_SHOWING).exists({ count: 5 });

    const sectionNames = this.element.querySelectorAll(SELECTOR.SECTION_NAME);

    assert.dom(sectionNames[0]).hasText('Albums');
    assert.dom(sectionNames[1]).hasText('Freestyle::Usage');
    assert.dom(sectionNames[2]).hasText('Foo Things');
    assert.dom(sectionNames[3]).hasText('Dynamic Properties');
    assert.dom(sectionNames[4]).hasText('Visual Style');

    assert.dom('[data-test-choose-section]').doesNotExist();
  });

  test('verifying guide subsections', function (assert) {
    const subsectionsFooThings = this.element.querySelectorAll(
      `${SELECTOR.SECTION_SHOWING}:nth-child(3) ${SELECTOR.SUBSECTION_SHOWING}`
    );

    assert
      .dom(subsectionsFooThings[0].querySelector(SELECTOR.SUBSECTION_NAME))
      .hasText('Foo Subsection A');

    assert
      .dom(subsectionsFooThings[1].querySelector(SELECTOR.SUBSECTION_NAME))
      .hasText('Foo Subsection B');

    const subsectionsVisualStyle = this.element.querySelectorAll(
      `${SELECTOR.SECTION_SHOWING}:nth-child(5) ${SELECTOR.SUBSECTION_SHOWING}`
    );

    assert
      .dom(subsectionsVisualStyle[0].querySelector(SELECTOR.SUBSECTION_NAME))
      .hasText('Typography');

    assert
      .dom(subsectionsVisualStyle[1].querySelector(SELECTOR.SUBSECTION_NAME))
      .hasText('Color');
  });

  test('freestyle annotations show up', function (assert) {
    assert
      .dom(`${SELECTOR.SECTION_SHOWING}:nth-child(3) ${SELECTOR.ANNOTATION}`)
      .includesText('A Note About Normal');
  });

  module('with `allowRenderingAllSections` set to `false`', function (hooks) {
    hooks.beforeEach(async function () {
      const emberFreestyle = this.owner.lookup(
        'service:ember-freestyle'
      ) as EmberFreestyleService;

      emberFreestyle.allowRenderingAllSections = false;

      await settled();
    });

    test('verifying guide sections', function (assert) {
      assert.dom(SELECTOR.SECTION_SHOWING).doesNotExist();
      assert.dom(SELECTOR.SUBSECTION_SHOWING).doesNotExist();
      assert.dom('[data-test-choose-section]').exists();
    });
  });
});
