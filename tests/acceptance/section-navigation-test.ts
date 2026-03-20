import {
  click,
  fillIn,
  findAll,
  settled,
  triggerKeyEvent,
  visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import EmberFreestyleService from '../../addon/services/ember-freestyle';

const SELECTOR = {
  GUIDE_SUBTITLE: '.FreestyleGuide-subtitle',
  GUIDE_TITLE: '.FreestyleGuide-title',
  MENU_ITEM: '.FreestyleMenu-item',
  MENU_ITEM_LINK: '.FreestyleMenu-itemLink',
  SUBMENU_ITEM_LINK: '.FreestyleMenu-submenuItemLink',
  SEARCH_INPUT: '.FreestyleMenu-searchInput',
  COLLAPSE_TOGGLE: '.FreestyleMenu-collapseToggle',
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

  test('sections with subsections have collapse toggles with aria-expanded', function (assert) {
    const toggles = findAll(SELECTOR.COLLAPSE_TOGGLE);
    assert.strictEqual(
      toggles.length,
      3,
      'sections with subsections have toggles',
    );

    for (const toggle of toggles) {
      assert.dom(toggle).hasAttribute('aria-expanded');
      assert.dom(toggle).hasAttribute('aria-label');
    }
  });

  test('toggling a section reveals and hides subsections', async function (assert) {
    await click(findAll(SELECTOR.COLLAPSE_TOGGLE)[1] as Element); // Foo Things

    assert
      .dom(findAll(SELECTOR.COLLAPSE_TOGGLE)[1])
      .hasAttribute('aria-expanded', 'true');

    const submenuItemLinksFooThings = findAll(
      `${SELECTOR.MENU_ITEM}:nth-child(4) ${SELECTOR.SUBMENU_ITEM_LINK}`,
    );

    assert.dom(submenuItemLinksFooThings[0]).hasText('Foo Subsection A');
    assert.dom(submenuItemLinksFooThings[1]).hasText('Foo Subsection B');

    // Re-query toggles since DOM re-renders on state change
    await click(findAll(SELECTOR.COLLAPSE_TOGGLE)[2] as Element); // Visual Style

    const submenuItemLinksVisualStyle = findAll(
      `${SELECTOR.MENU_ITEM}:nth-child(6) ${SELECTOR.SUBMENU_ITEM_LINK}`,
    );

    assert.dom(submenuItemLinksVisualStyle[0]).hasText('Typography');
    assert.dom(submenuItemLinksVisualStyle[1]).hasText('Color');
  });

  test('search filters sections by name', async function (assert) {
    await fillIn(SELECTOR.SEARCH_INPUT, 'foo');

    // "All" link + 1 matching section
    const visibleLinks = findAll(SELECTOR.MENU_ITEM_LINK);
    assert.dom(visibleLinks[1]).hasText('Foo Things');

    // Subsections are auto-expanded when filtering
    assert.dom(SELECTOR.SUBMENU_ITEM_LINK).exists({ count: 2 });
  });

  test('search filters by subsection name and keeps section header', async function (assert) {
    await fillIn(SELECTOR.SEARCH_INPUT, 'typography');

    // "All" link + matching section header
    const visibleLinks = findAll(SELECTOR.MENU_ITEM_LINK);
    assert.dom(visibleLinks[1]).hasText('Visual Style');

    const subsectionLinks = findAll(SELECTOR.SUBMENU_ITEM_LINK);
    assert.strictEqual(
      subsectionLinks.length,
      1,
      'only matching subsection shown',
    );
    assert.dom(subsectionLinks[0]).hasText('Typography');
  });

  test('clearing search restores all sections', async function (assert) {
    await fillIn(SELECTOR.SEARCH_INPUT, 'foo');
    // "All" + 1 matching section
    assert
      .dom(SELECTOR.COLLAPSE_TOGGLE)
      .exists({ count: 1 }, 'only Foo Things toggle visible');

    await fillIn(SELECTOR.SEARCH_INPUT, '');
    assert
      .dom(SELECTOR.MENU_ITEM)
      .exists({ count: 6 }, 'all sections restored');
  });

  test('keyboard ArrowDown/ArrowUp moves highlight through subsections', async function (assert) {
    // Expand Foo Things to get subsection items
    await click(findAll(SELECTOR.COLLAPSE_TOGGLE)[1] as Element);

    // Focus the search input for keyboard events
    await click(SELECTOR.SEARCH_INPUT);

    await triggerKeyEvent(SELECTOR.SEARCH_INPUT, 'keydown', 'ArrowDown');
    assert
      .dom('.FreestyleMenu-submenuItem.is-highlighted')
      .exists({ count: 1 });

    await triggerKeyEvent(SELECTOR.SEARCH_INPUT, 'keydown', 'ArrowDown');
    const highlighted = findAll('.FreestyleMenu-submenuItem.is-highlighted');
    assert.strictEqual(highlighted.length, 1, 'only one item highlighted');
  });

  test('Escape clears filter and highlight', async function (assert) {
    await fillIn(SELECTOR.SEARCH_INPUT, 'foo');
    // "All" + 1 matching section
    assert
      .dom(SELECTOR.COLLAPSE_TOGGLE)
      .exists({ count: 1 }, 'only Foo Things toggle visible');

    await triggerKeyEvent(SELECTOR.SEARCH_INPUT, 'keydown', 'ArrowDown');
    assert
      .dom('.FreestyleMenu-submenuItem.is-highlighted')
      .exists({ count: 1 });

    await triggerKeyEvent(SELECTOR.SEARCH_INPUT, 'keydown', 'Escape');

    assert
      .dom(SELECTOR.MENU_ITEM)
      .exists({ count: 6 }, 'all sections restored');
    assert
      .dom('.FreestyleMenu-submenuItem.is-highlighted')
      .doesNotExist('highlight cleared');
  });

  test('Enter on highlighted item navigates', async function (assert) {
    await fillIn(SELECTOR.SEARCH_INPUT, 'foo');
    await triggerKeyEvent(SELECTOR.SEARCH_INPUT, 'keydown', 'ArrowDown');
    await triggerKeyEvent(SELECTOR.SEARCH_INPUT, 'keydown', 'Enter');

    // Should have navigated to Foo Things > Foo Subsection A
    assert.dom('.FreestyleSection-name').hasText('Foo Things');
    assert.dom('.FreestyleSubsection-name').hasText('Foo Subsection A');
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
