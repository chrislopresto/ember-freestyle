import PageObject, {
  collection,
  clickable,
  clickOnText,
  text,
  visitable,
  contains,
} from 'ember-cli-page-object';

export default PageObject.create({
  visit: visitable('/acceptance'),

  header: {
    scope: '.FreestyleGuide-header',
    title: text('.FreestyleGuide-title'),
    subtitle: text('.FreestyleGuide-subtitle'),
  },

  menu: {
    scope: '.FreestyleMenu',

    sections: collection('.FreestyleMenu-item', {
      text: text('.FreestyleMenu-itemLink'),
      link: clickable('.FreestyleMenu-itemLink'),

      subsections: collection('.FreestyleMenu-submenu', {
        text: text('.FreestyleMenu-submenuItemLink'),
        link: clickable('.FreestyleMenu-submenuItemLink'),
      }),
    }),
  },

  content: {
    scope: '.FreestyleGuide-content',

    visibleSections: collection('.FreestyleSection--showing', {
      text: text('.FreestyleSection-name'),
      visibleSubsections: collection('.FreestyleSubsection.is-showing', {
        text: text('.FreestyleSubsection-name'),
        collections: collection('.FreestyleCollection', {
          title: text('.FreestyleCollection-title'),
          activeVariantListItemLabelText: text(
            '.FreestyleCollection-variantListItem--active'
          ),

          selectVariant: clickOnText('.FreestyleCollection-variantListItem'),

          variantListItems: collection('.FreestyleCollection-variantListItem', {
            text: text(),
          }),

          variants: collection('.FreestyleVariant', {
            contains: contains(),
            usageTitle: text('.FreestyleUsage-title'),
            annotationContains: contains('.FreestyleAnnotation'),
            noteContent: text('.FreestyleAnnotation', { multiple: true }),
          }),
        }),
      }),
    }),
    allVisibleSubsections: collection('.FreestyleSubsection.is-showing', {}),
  },
});
