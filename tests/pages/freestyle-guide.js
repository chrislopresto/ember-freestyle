import PageObject, {
  collection,
  clickable,
  clickOnText,
  text,
  visitable,
  contains
} from 'ember-cli-page-object';

export default PageObject.create({
  visit: visitable('/acceptance'),

  header: {
    scope: '.FreestyleGuide-header',
    title: text('.FreestyleGuide-title'),
    subtitle: text('.FreestyleGuide-subtitle')
  },

  menu: {
    scope: '.FreestyleMenu',

    sections: collection({
      itemScope: '.FreestyleMenu-item',

      item: {
        text: text('.FreestyleMenu-itemLink'),
        link: clickable('.FreestyleMenu-itemLink'),

        subsections: collection({
          itemScope: '.FreestyleMenu-submenu',

          item: {
            text: text('.FreestyleMenu-submenuItemLink'),
            link: clickable('.FreestyleMenu-submenuItemLink')
          }
        })
      }
    })
  },

  content: {
    scope: '.FreestyleGuide-content',

    sections: collection({
      itemScope: '.FreestyleSection',

      item: {
        text: text('.FreestyleSection-name'),

        subsections: collection({
          itemScope: '.FreestyleSubsection',

          item: {
            text: text('.FreestyleSubsection-name'),
            collections: collection({
              itemScope: '.FreestyleCollection',

              item: {
                title: text('.FreestyleCollection-title'),
                activeVariantListItemLabel: contains('.FreestyleCollection-variantListItem--active'),

                variantListItems: collection({
                  itemScope: '.FreestyleCollection-variantListItem',
                  selectVariant: clickOnText('.FreestyleCollection-variantListItem'),

                  item: {
                    text: text()
                  }
                }),

                variants: collection({
                  itemScope: '.FreestyleVariant',

                  item: {
                    contains: contains(),
                    usageTitle: text('.FreestyleUsage-title'),
                    annotationContains: contains('.FreestyleAnnotation')
                  }
                })
              }
            })

          }
        })
      }
    })
  }

});
