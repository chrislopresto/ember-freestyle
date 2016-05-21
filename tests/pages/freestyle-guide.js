import PageObject, {
  collection,
  clickable,
  text,
  visitable
} from 'ember-cli-page-object';

export default PageObject.create({
  visit: visitable('/?s=Foo%20Things'),

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
  }
});
