import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('freestyle-dynamic', 'Unit | Component | freestyle dynamic', {
  unit: true
});

test('an assertion is thrown if dynamicProperties is not an object', function(assert) {
  assert.expect(2);

  assert.throws(() => {
    this.subject({ dynamicProperties: 7 });
  }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: 7/)

  assert.throws(() => {
    this.subject({ dynamicProperties: "foo" });
  }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: foo/)
});

test('dynamicProperties is initialized to {} if value passed in is falsey', function(assert) {
  assert.expect(2);

  let component = this.subject({ dynamicProperties: null });
  assert.deepEqual(component.dynamicProperties, {});

  component = this.subject({ dynamicProperties: undefined });
  assert.deepEqual(component.dynamicProperties, {});
});

