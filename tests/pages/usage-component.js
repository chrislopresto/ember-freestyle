import PageObject, {
  text,
  count
} from 'ember-cli-page-object';

export default PageObject.create({
  title: text('.FreestyleUsage-title'),
  content: text('.FreestyleUsage-rendered'),
  numTitles: count('.FreestyleUsage-title'),
  numFocusButtons: count('.FreestyleUsage-focusCta'),
  numCodeSection: count('.FreestyleUsage-usage'),

  usageSection: {
    scope: '.FreestyleUsage-usage',
    rawSource: text('.FreestyleUsage-sourceContainer', { normalize: false }),
    source: text('.FreestyleUsage-sourceContainer')
  }
});
