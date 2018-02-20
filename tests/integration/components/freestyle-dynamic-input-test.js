import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | freestyle dynamic input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the property name', async function(assert) {
    await render(hbs`{{freestyle-dynamic-input propertyName='title'}}`);
    assert.equal(this.$().text().trim(), 'title:');
  });
});