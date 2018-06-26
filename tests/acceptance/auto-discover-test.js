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
  assert.ok(discoveredComponents.includes('x-baz/freestyle'), 'includes discovered component');
  assert.dom('.x-Baz-title').hasText('Just a static x-baz title');
});
