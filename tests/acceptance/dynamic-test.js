import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import freestyleDynamic from '../pages/freestyle-dynamic';

module('Acceptance | dynamic', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function(assert) {
    assert.includes = function(container, item, message) {
      this.pushResult({
        result: container.indexOf(item) !== -1,
        actual: container,
        expected: String(container) + ' contains ' + item,
        message: message
      });
    };
    freestyleDynamic.visit();
  });

  test('block content', (assert) => {
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
      freestyleDynamic.snippet,
      '<p>Dynamic Block Content</p>',
      'The snippet shows the initial dynamic block content'
    );
    assert.includes(
      freestyleDynamic.snippet,
      '<p>Static block content</p>',
      'The snippet shows the static block content'
    );
    assert.includes(
      freestyleDynamic.snippet,
      '<p> Reference another dynamic prop in block: is tasteful: false </p>',
      'The snippet can include a block that references multiple dynamic properties'
    );
    freestyleDynamic.changeBlockContentInput('Something new');
    assert.strictEqual(
      freestyleDynamic.blockContentRendered,
      'Something new Static block content Reference another dynamic prop in block: is tasteful: false',
      'The rendered block content changes when the input changes'
    );
    assert.includes(
      freestyleDynamic.snippet,
      '<p>Something new</p>',
      'The snippet changes when the input changes'
    );
    freestyleDynamic.toggleTastefulInput();
    assert.strictEqual(
      freestyleDynamic.blockContentRendered,
      'Something new Static block content Reference another dynamic prop in block: is tasteful: true',
      'The rendered block content changes when another dynamic property input changes'
    );
  });

  test('select input', (assert) => {
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
      freestyleDynamic.snippet,
      `size='medium'`,
      'The snippet shows initial value'
    );
    freestyleDynamic.changeSelectInput('small');
    assert.ok(
      freestyleDynamic.isSmall,
      'The rendered component changes when the select changes'
    );
    assert.includes(
      freestyleDynamic.snippet,
      `size='small'`,
      'The snippet changes when the select changes'
    );
  });

  test('number input', (assert) => {
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
      freestyleDynamic.snippet,
      'rank=10',
      'The snippet shows initial value'
    );
    freestyleDynamic.changeNumberInput('5');
    assert.strictEqual(
      freestyleDynamic.numberRendered,
      '5',
      'The rendered component changes when the input changes'
    );
    assert.includes(
      freestyleDynamic.snippet,
      'rank=5',
      'The snippet changes when the input changes'
    );
  });

  test('checkbox input', (assert) => {
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
      freestyleDynamic.snippet,
      'isVisible=true',
      'The snippet shows initial value'
    );
    freestyleDynamic.toggleCheckbox();
    assert.notOk(
      freestyleDynamic.isVisible,
      'The rendered component changes when the checkbox changes'
    );
    assert.includes(
      freestyleDynamic.snippet,
      'isVisible=false',
      'The snippet changes when the checkbox changes'
    );
  });
});
