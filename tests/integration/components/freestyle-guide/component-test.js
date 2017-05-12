import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import usage from '../../../pages/usage-component';
import Ember from 'ember';

// Stub freestyle service
const FreestyleStub = Ember.Service.extend({
  defaultTheme: 'solarized-light',
  highlight: function() {}
});

moduleForComponent('freestyle-guide', 'Integration | Component | freestyle guide', {
  integration: true,

  beforeEach() {
    this.register('service:emberFreestyle', FreestyleStub);
    this.inject.service('emberFreestyle');
    usage.setContext(this);
  },

  afterEach() {
    usage.removeContext();
  }
});

test('it sets the passed in highlightJsTheme as the default theme on the service', function(assert) {
  assert.expect(2);

  assert.equal(this.get('emberFreestyle.defaultTheme'), 'solarized-light');
  this.render(hbs`
    {{#freestyle-guide
        title='Ember Freestyle'
        subtitle='Living Style Guide'
        highlightJsTheme='zenburn'
    }}
      I am the guide
    {{/freestyle-guide}}
    `);
  assert.equal(this.get('emberFreestyle.defaultTheme'), 'zenburn');
});
