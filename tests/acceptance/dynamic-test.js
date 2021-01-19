import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleDynamic from '../pages/freestyle-dynamic';
import { waitUntil } from '@ember/test-helpers';

module('Acceptance | dynamic', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function (assert) {
    assert.includes = function (container, item, message) {
      this.pushResult({
        result: container.indexOf(item) !== -1,
        actual: container,
        expected: String(container) + ' contains ' + item,
        message: message,
      });
    };
    await freestyleDynamic.visit();
  });

  test('block content', async (assert) => {
    assert.expect(8);
    assert.strictEqual(
      freestyleDynamic.blockContentInputValue,
      'Dynamic Block Content',
      'The input starts with the initial value'
    );
    assert.strictEqual(
      freestyleDynamic.blockContentRendered,
      'Dynamic Block Content Static block content Reference another dynamic prop in block: is tasteful: false',
      'The rendered block can show dynamic and static content'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      '<p>Dynamic Block Content</p>',
      'The snippet shows the initial dynamic block content'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      '<p>Static block content</p>',
      'The snippet shows the static block content'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      '<p> Reference another dynamic prop in block: is tasteful: false </p>',
      'The snippet can include a block that references multiple dynamic properties'
    );
    await freestyleDynamic.changeBlockContentInput('Something new');
    assert.strictEqual(
      freestyleDynamic.blockContentRendered,
      'Something new Static block content Reference another dynamic prop in block: is tasteful: false',
      'The rendered block content changes when the input changes'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      '<p>Something new</p>',
      'The snippet changes when the input changes'
    );
    await freestyleDynamic.toggleTastefulInput();
    assert.strictEqual(
      freestyleDynamic.blockContentRendered,
      'Something new Static block content Reference another dynamic prop in block: is tasteful: true',
      'The rendered block content changes when another dynamic property input changes'
    );
  });

  test('select input', async (assert) => {
    assert.expect(5);
    assert.strictEqual(
      freestyleDynamic.selectInputValue,
      'medium',
      'The input starts with the initial value'
    );
    assert.ok(
      freestyleDynamic.isMedium,
      'The rendered block reflects the initial value'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      `size='medium'`,
      'The snippet shows initial value'
    );
    await freestyleDynamic.changeSelectInput('small');
    assert.ok(
      freestyleDynamic.isSmall,
      'The rendered component changes when the select changes'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      `size='small'`,
      'The snippet changes when the select changes'
    );
  });

  test('number input', async (assert) => {
    assert.expect(5);
    assert.strictEqual(
      freestyleDynamic.numberInputValue,
      '10',
      'The input starts with the initial value'
    );
    assert.strictEqual(
      freestyleDynamic.numberRendered,
      '10',
      'The rendered block reflects the initial value'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      'rank={{10}}',
      'The snippet shows initial value'
    );
    await freestyleDynamic.changeNumberInput('5');
    assert.strictEqual(
      freestyleDynamic.numberRendered,
      '5',
      'The rendered component changes when the input changes'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      'rank={{5}}',
      'The snippet changes when the input changes'
    );
  });

  test('checkbox input', async (assert) => {
    assert.expect(5);
    assert.strictEqual(
      freestyleDynamic.checkboxInputValue,
      'on',
      'The input starts with the initial value'
    );
    assert.ok(
      freestyleDynamic.isVisible,
      'The rendered component reflects the initial value'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      'isVisible={{true}}',
      'The snippet shows initial value'
    );
    await freestyleDynamic.toggleCheckbox();
    await waitUntil(() => !freestyleDynamic.isVisible);
    assert.notOk(
      freestyleDynamic.isVisible,
      'The rendered component changes when the checkbox changes'
    );
    assert.includes(
      freestyleDynamic.sourceContainer,
      'isVisible={{false}}',
      'The snippet changes when the checkbox changes'
    );
  });
});
