import PageObject, {
  text,
  count,
  collection
} from 'ember-cli-page-object';

export default PageObject.create({
  title: text('.FreestyleUsage-title'),
  content: text('.FreestyleUsage-rendered'),
  numTitles: count('.FreestyleUsage-title'),
  numFocusButtons: count('.FreestyleUsage-focusCta'),
  numNotesSection: count('.FreestyleUsage-notes'),
  numCodeSection: count('.FreestyleUsage-usage'),

  notesSection: {
    scope: '.FreestyleUsage-notes',
    snippets: collection({
      itemScope: '.FreestyleUsage-snippet',
    })
  },

  usageSection: {
    scope: '.FreestyleUsage-usage',
    snippets: collection({
      itemScope: '.FreestyleUsage-snippet',
    })
  }

});
