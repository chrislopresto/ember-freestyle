import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | freestyle dynamic', function (hooks) {
  setupTest(hooks);

  test('an assertion is thrown if dynamicProperties is not an object', function (assert) {
    assert.expect(2);

    assert.throws(() => {
      this.owner
        .factoryFor('component:freestyle-dynamic')
        .create({ dynamicProperties: 7 });
    }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: 7/);

    assert.throws(() => {
      this.owner
        .factoryFor('component:freestyle-dynamic')
        .create({ dynamicProperties: 'foo' });
    }, /Assertion Failed: dynamicProperties passed into freestyle-dynamic must be an object. {2}You passed: foo/);
  });

  test('dynamicProperties is initialized to {} if value passed in is falsey', function (assert) {
    assert.expect(2);

    let component = this.owner
      .factoryFor('component:freestyle-dynamic')
      .create({ dynamicProperties: null });
    assert.deepEqual(component.dynamicProperties, {});

    component = this.owner
      .factoryFor('component:freestyle-dynamic')
      .create({ dynamicProperties: undefined });
    assert.deepEqual(component.dynamicProperties, {});
  });
});
