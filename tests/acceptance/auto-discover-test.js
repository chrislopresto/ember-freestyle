import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';
import discoveredComponents from 'dummy/-freestyle/discovered-components';

moduleForAcceptance('Acceptance | auto-discover', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying auto discovery', async function(assert) {
  assert.ok(discoveredComponents.includes('x-baz/freestyle'), 'includes discovered x-baz/freestyle component');
  assert.ok(discoveredComponents.includes('freestyle/x-bay'), 'includes discovered freestyle/x-bay component');
  assert.ok(discoveredComponents.includes('freestyle/x-qux'), 'includes discovered freestyle/x-qux component');
  assert.dom('.x-Baz-title').hasText('Just a static x-baz title');
  assert.dom('.x-Bay-title').hasText('Just a static x-bay title');
  assert.dom('.x-Qux-title').hasText('Just a static x-qux title');
});
