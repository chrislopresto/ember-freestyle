import { findAll, settled, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import EmberFreestyleService from '../../addon/services/ember-freestyle';

const SELECTOR = {
  GUIDE_SUBTITLE: '.FreestyleGuide-subtitle',
  GUIDE_TITLE: '.FreestyleGuide-title',
  MENU_ITEM: '.FreestyleMenu-item',
  MENU_ITEM_LINK: '.FreestyleMenu-itemLink',
  SUBMENU_ITEM_LINK: '.FreestyleMenu-submenuItemLink',
};

module('Acceptance | section navigation', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/acceptance');
  });

  test('verifying header', function (assert) {
    assert.dom(SELECTOR.GUIDE_TITLE).hasText('Ember Freestyle');
    assert.dom(SELECTOR.GUIDE_SUBTITLE).hasText('Living Style Guide');
  });

  test('verifying menu sections', function (assert) {
    assert.dom(SELECTOR.MENU_ITEM).exists({ count: 6 });

    const menuItemLinks = findAll(SELECTOR.MENU_ITEM_LINK);

    assert.dom(menuItemLinks[0]).hasText('All');
    assert.dom(menuItemLinks[1]).hasText('Albums');
    assert.dom(menuItemLinks[2]).hasText('Freestyle::Usage');
    assert.dom(menuItemLinks[3]).hasText('Foo Things');
    assert.dom(menuItemLinks[4]).hasText('Dynamic Properties');
    assert.dom(menuItemLinks[5]).hasText('Visual Style');
  });

  test('navigating directly to a subsection', async function (assert) {
    const submenuItemLinksFooThings = findAll(
      `${SELECTOR.MENU_ITEM}:nth-child(4) ${SELECTOR.SUBMENU_ITEM_LINK}`,
    );

    assert.dom(submenuItemLinksFooThings[0]).hasText('Foo Subsection A');
    assert.dom(submenuItemLinksFooThings[1]).hasText('Foo Subsection B');

    const submenuItemLinksVisualStyle = findAll(
      `${SELECTOR.MENU_ITEM}:nth-child(6) ${SELECTOR.SUBMENU_ITEM_LINK}`,
    );

    assert.dom(submenuItemLinksVisualStyle[0]).hasText('Typography');
    assert.dom(submenuItemLinksVisualStyle[1]).hasText('Color');
  });

  module('with `allowRenderingAllSections` set to `false`', function (hooks) {
    hooks.beforeEach(async function () {
      const emberFreestyle = this.owner.lookup(
        'service:ember-freestyle',
      ) as EmberFreestyleService;

      emberFreestyle.allowRenderingAllSections = false;

      await settled();
    });

    test('verifying menu sections', function (assert) {
      assert.dom(SELECTOR.MENU_ITEM).exists({ count: 5 });

      const menuItemLinks = findAll(SELECTOR.MENU_ITEM_LINK);

      assert.dom(menuItemLinks[0]).hasText('Albums');
      assert.dom(menuItemLinks[1]).hasText('Freestyle::Usage');
      assert.dom(menuItemLinks[2]).hasText('Foo Things');
      assert.dom(menuItemLinks[3]).hasText('Dynamic Properties');
      assert.dom(menuItemLinks[4]).hasText('Visual Style');
    });
  });
});
