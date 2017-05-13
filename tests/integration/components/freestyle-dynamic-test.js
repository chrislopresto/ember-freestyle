import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle-dynamic', 'Integration | Component | freestyle dynamic', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{freestyle-dynamic}}`);
  assert.ok(this.$().text().includes('Dynamic Properties:'));
});
