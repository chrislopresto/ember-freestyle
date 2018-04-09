import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('freestyle-dynamic', 'Unit | Component | freestyle dynamic', {
  unit: true
});

test('an assertion is thrown if dynamicProperties is undefined', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.subject({ dynamicProperties: undefined });
  }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: undefined/)
});
