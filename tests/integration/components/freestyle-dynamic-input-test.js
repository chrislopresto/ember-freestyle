import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle-dynamic-input', 'Integration | Component | freestyle dynamic input', {
  integration: true
});

test('it renders the property name', function(assert) {
  this.render(hbs`{{freestyle-dynamic-input propertyName='title'}}`);
  assert.equal(this.$().text().trim(), 'title:');
});
