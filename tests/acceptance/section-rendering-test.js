import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';

moduleForAcceptance('Acceptance | section rendering', {
  beforeEach() {
    freestyleGuide.visit();
  }
});

test('verifying guide sections', (assert) => {
  assert.expect(3);
  andThen(() => {
    assert.equal(freestyleGuide.content.sections().count, 2);
    assert.equal(freestyleGuide.content.sections(0).text, 'Foo Things');
    assert.equal(freestyleGuide.content.sections(1).text, 'Visual Style');
  });
});

test('verifying guide subsections', (assert) => {
  assert.expect(6);
  andThen(() => {
    let sectionFooThings = freestyleGuide.content.sections(0);
    assert.equal(sectionFooThings.subsections().count, 2);
    assert.equal(sectionFooThings.subsections(0).text, 'Foo Subsection A');
    assert.equal(sectionFooThings.subsections(1).text, 'Foo Subsection B');

    let sectionVisualStyle = freestyleGuide.content.sections(1);
    assert.equal(sectionVisualStyle.subsections().count, 2);
    assert.equal(sectionVisualStyle.subsections(0).text, 'Typography');
    assert.equal(sectionVisualStyle.subsections(1).text, 'Color');
  });
});
