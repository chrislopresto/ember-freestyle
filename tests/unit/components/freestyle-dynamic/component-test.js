import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | freestyle dynamic', function(hooks) {
  setupTest(hooks);

  test('an assertion is thrown if dynamicProperties is undefined', function(assert) {
    assert.expect(1);

    assert.throws(() => {
      this.owner.factoryFor('component:freestyle-dynamic').create({ dynamicProperties: undefined });
    }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: undefined/)
  });
});
