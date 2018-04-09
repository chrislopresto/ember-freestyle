import Service from '@ember/service';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import usage from '../../../pages/usage-component';

// Stub freestyle service
const FreestyleStub = Service.extend({
  highlight: function() {},
  ensureHljsTheme: function() {}
});

moduleForComponent('freestyle-dynamic', 'Integration | Component | freestyle dynamic', {
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

test('an assertion is thrown if dynamicProperties is undefined', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.render(hbs`
    {{#freestyle-dynamic 'dynamic-properties'
      dynamicProperties=dynamicProperties
      title='Dynamic Properties'
      componentName='x-bar'
      as |dynamic|
    }}
    {{/freestyle-dynamic}}
    `);
  }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: undefined/)
});
