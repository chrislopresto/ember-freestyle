import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';
import discoveredComponents from 'dummy/-freestyle/discovered-components';

moduleForAcceptance('Acceptance | section rendering', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying guide sections', (assert) => {
  andThen(() => {
    assert.ok(discoveredComponents.includes('x-bar/freestyle'), 'includes discovered component');
  });
});
