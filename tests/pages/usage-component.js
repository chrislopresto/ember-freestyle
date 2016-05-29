import PageObject, {
  text,
  count,
  collection,
  hasClass
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

      item: {
        isZenburn: hasClass('FreestyleUsage-snippet--zenburn'),
        isSolarizedLight: hasClass('FreestyleUsage-snippet--solarized-light')
      }
    })
  },

  usageSection: {
    scope: '.FreestyleUsage-usage',
    snippets: collection({
      itemScope: '.FreestyleUsage-snippet',

      item: {
        isZenburn: hasClass('FreestyleUsage-snippet--zenburn'),
        isSolarizedLight: hasClass('FreestyleUsage-snippet--solarized-light')
      }
    })
  }

});
