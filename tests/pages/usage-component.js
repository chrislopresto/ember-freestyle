import PageObject, { text, count } from 'ember-cli-page-object';
import { findElement } from 'ember-cli-page-object/extend';

function textWithLineBreaks(selector, options = {}) {
  return {
    isDescriptor: true,

    get() {
      return findElement(this, selector, options)[0].innerText;
    },
  };
}

export default PageObject.create({
  title: text('.FreestyleUsage-title'),
  content: text('.FreestyleUsage-rendered'),
  numTitles: count('.FreestyleUsage-title'),
  numFocusButtons: count('.FreestyleUsage-focusCta'),
  numCodeSection: count('.FreestyleUsage-usage'),

  usageSection: {
    scope: '.FreestyleUsage-usage',
    rawSource: textWithLineBreaks('.FreestyleUsage-sourceContainer'),
    source: text('.FreestyleUsage-sourceContainer'),
  },
});
