import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle-dynamic-input', 'Integration | Component | freestyle dynamic input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{freestyle-dynamic-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#freestyle-dynamic-input}}
      template block text
    {{/freestyle-dynamic-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
