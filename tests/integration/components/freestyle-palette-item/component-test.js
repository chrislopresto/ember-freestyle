import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('freestyle-palette-item', 'Integration | Component | freestyle palette item', {
  integration: true
});

test('it has a base background color', function(assert) {
  assert.expect(1);

  this.set('color', {
    base: '#abcdef'
  });

  this.render(hbs`{{freestyle-palette-item color=color}}`);

  let backgroundColorStyle = 'style="background-color: #abcdef;"';
  assert.ok(find('.FreestylePaletteItem')
    .innerHTML
    .indexOf(backgroundColorStyle) > -1);
});
