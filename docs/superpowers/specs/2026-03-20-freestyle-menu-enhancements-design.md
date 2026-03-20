# ember-freestyle Menu Enhancements

## Summary

Enhance the `FreestyleMenu` component in [ember-freestyle](https://github.com/chrislopresto/ember-freestyle) with four features: collapsible sections, search/filter, keyboard navigation, and scroll spy with auto-scroll. Changes will be proposed as a PR to the upstream repo.

## Context

The current `FreestyleMenu` renders a flat two-level list (sections → subsections) with no collapse, search, or active-item tracking. Large component libraries become unwieldy to navigate. The menu's data model (`Section[]` with `Subsection[]` children) and the service's query-param routing remain unchanged.

### Key architectural details

- The `EmberFreestyleService` has `section` and `subsection` tracked properties wired to query params `s` and `ss` via `FreestyleController` (alias bindings). These control which content sections render.
- `FreestyleSection` components conditionally render based on `shouldShowSection()`. `FreestyleSubsection` elements always render their outer `<div>` but toggle content via an `is-showing` / `is-hidden` class.
- The `<article class="FreestyleGuide-content">` element in `FreestyleGuide` is the content container. The scroll container is `window` (no overflow scroll on the article itself).

## Features

### 1. Collapsible Sections

**Behavior:**
- Each section header row has two interaction zones:
  - **Chevron area (left):** Toggles expand/collapse of the subsection list only. Does not navigate.
  - **Section name (right):** Navigates via `LinkTo` (sets `s` query param), which filters content to that section. Also auto-expands the section in the sidebar.
- A chevron indicator (CSS border-triangle, no icon dependency) shows expand/collapse state, rotating 90° when expanded.
- Default state: all sections collapsed.
- Selecting "All" expands all sections and clears the `s`/`ss` query params.
- When a section is selected via query params (`s`), auto-expand it.
- When search filter is active, all matching sections auto-expand regardless of manual collapse state.

**State:** `TrackedSet<string>` (from `tracked-built-ins`) of expanded section names on the `FreestyleMenu` component. A plain `Set` with `@tracked` would not react to `add`/`delete` — `TrackedSet` is required.

**Collapse style:** Instant `display: none` / `display: block` toggle. No animation — simpler and avoids max-height transition issues with dynamic content.

### 2. Search/Filter

**Behavior:**
- Text input at the top of the menu, above the "All" link.
- Placeholder text: "Filter components..."
- Filters sections and subsections by case-insensitive substring match on name.
- A section is visible if:
  - Its own name matches the filter, OR
  - Any of its subsections match the filter.
- When a section is visible because a subsection matches (but the section name itself doesn't match), only matching subsections are shown, but the section header remains visible as context.
- When a section name matches, all its subsections are shown.
- All matching sections auto-expand when filter text is present.
- Clearing the filter restores the previous expand/collapse state.
- No debounce — the menu is typically <100 items so filtering is instant.

**State:** Tracked `filterText` string on the `FreestyleMenu` component.

**Computed property:** `filteredMenu` getter that derives the visible sections/subsections from `this.menu` and `this.filterText`. Returns `FilteredSection[]` where each entry has the section and its filtered subsections.

**Accessibility:** The search input has `aria-label="Filter components"` and `role="searchbox"`.

### 3. Keyboard Navigation

**Scope:** Active when the search input OR the menu `<nav>` element has focus.

**Keys:**
- **Arrow Down:** Move highlight to the next subsection item in the filtered list (skip section headers). Stops at the last item (no wrap).
- **Arrow Up:** Move highlight to the previous subsection item (skip section headers). Stops at the first item.
- **Enter:** Navigate to the highlighted item (trigger query param transition via router service, same effect as clicking the `LinkTo`).
- **Escape:** Clear filter text, reset highlight index.

**State:** Tracked `highlightedIndex` (number, -1 = nothing highlighted) on the `FreestyleMenu` component. Index is into the flat list of currently visible subsection items.

**Edge cases:**
- When filter text changes, reset `highlightedIndex` to -1.
- When highlighted item is off-screen in the sidebar, `scrollIntoView({ block: 'nearest' })` on the `<li>` element.

**Accessibility:**
- The search input has `aria-activedescendant` pointing to the highlighted item's `id`.
- Each subsection `<li>` gets an `id` like `freestyle-menu-item-{index}` and `role="option"`.
- The menu list has `role="listbox"` when keyboard nav is active.

### 4. Scroll Spy + Auto-Scroll

**Behavior:**
- When viewing content (especially in "All" mode), the sidebar highlights whichever subsection is currently scrolled into view.
- The topmost visible subsection (with class `is-showing`) wins. Elements with class `is-hidden` are ignored.
- The sidebar auto-scrolls to keep the active menu item visible via `scrollIntoView({ block: 'nearest' })`.
- Same highlight style as keyboard nav and click-to-navigate — one unified "active item" visual.

**Naming:** The service properties are `scrollSpySection` and `scrollSpySubsection` to avoid confusion with the existing `section`/`subsection` query-param properties.

**Implementation:**
- An `IntersectionObserver` with `root: null` (viewport) and `threshold: 0` watches `.FreestyleSubsection.is-showing` elements.
- A `MutationObserver` on the content container watches for child changes (elements added/removed when sections expand/collapse or "All" mode toggles). When mutations occur, re-scan for `.FreestyleSubsection.is-showing` elements and update the `IntersectionObserver`'s observed set.
- The modifier reads section/subsection names from `data-section` and `data-subsection` attributes on the `.FreestyleSubsection` elements. These attributes need to be added to the `FreestyleSubsection` component template.
- The observer updates `scrollSpySection` and `scrollSpySubsection` on the service.
- `FreestyleMenu` reads these for highlighting. When the keyboard nav highlight is active (index >= 0), it takes precedence over scroll spy.

**Interaction with other features:**
- Click-to-navigate: sets query params → content updates → observer picks it up → sidebar highlights.
- Keyboard nav in search input: highlight follows keyboard, not scroll. Pressing Enter navigates, which triggers scroll spy.
- Filter active: scroll spy still works on visible filtered items.
- Single section selected: scroll spy works within that section's visible subsections.

**Auto-expand on scroll:** When scroll spy detects a new active section, auto-expand that section in the sidebar if it's collapsed.

**Where the modifier lives:** Applied to the `<article class="FreestyleGuide-content">` element in `freestyle-guide/index.hbs`.

## Files Changed

All changes are in the **ember-freestyle** repo (`/tmp/ember-freestyle`):

### Modified

1. **`addon/components/freestyle-menu/index.ts`**
   - Add `filterText` (tracked string), `expandedSections` (`TrackedSet<string>`), `highlightedIndex` (tracked number) properties.
   - Add `filteredMenu` getter.
   - Add `toggleSection`, `expandSection`, `handleKeydown`, `navigateToHighlighted` actions.
   - Read `scrollSpySection`/`scrollSpySubsection` from service for highlight state.
   - Inject router service for programmatic navigation on Enter key.

2. **`addon/components/freestyle-menu/index.hbs`**
   - Add search `<input>` with `aria-label`, `{{on "input"}}`, `{{on "keydown"}}` handlers.
   - Replace `this.menu` iteration with `this.filteredMenu`.
   - Split section header into chevron toggle `<button>` + `<LinkTo>` for navigation.
   - Conditionally render subsection `<ul>` based on `expandedSections.has(section.name)`.
   - Add `is-active` CSS class to subsection `<li>` when it matches scroll spy or keyboard highlight.
   - Add `id` attributes on subsection `<li>` elements for `aria-activedescendant`.

3. **`addon/services/ember-freestyle.ts`**
   - Add `scrollSpySection` and `scrollSpySubsection` tracked properties.
   - Add `setScrollSpyActive` action (called by observer modifier).

4. **`addon/components/freestyle-subsection/index.hbs`**
   - Add `data-section` and `data-subsection` attributes to the outer `<div>` so the scroll spy can identify which section/subsection an element belongs to.

5. **`addon/components/freestyle-guide/index.hbs`**
   - Apply `{{freestyle-scroll-spy}}` modifier to the `<article class="FreestyleGuide-content">` element.

6. **`addon/controllers/freestyle.ts`**
   - No changes needed — the existing query param wiring stays as-is.

7. **`app/styles/components/freestyle-menu.scss`**
   - Search input styles: full-width, padding, subtle border, matching font.
   - Chevron button styles: inline, no border/background, CSS border-triangle, rotation transform on expand.
   - Section header layout: flexbox row with chevron + link.
   - Subsection list: `display: none` when collapsed, `display: block` when expanded.
   - `is-active` class: background highlight color (use `$FreestyleGuide-color--primary` with opacity), distinct from hover.
   - Highlighted item (keyboard): same style as `is-active`.

### New

8. **`addon/modifiers/freestyle-scroll-spy.ts`**
   - Class-based modifier (extends `Modifier` from `ember-modifier`).
   - Sets up `IntersectionObserver` with `root: null` (viewport) in `modify()`.
   - Sets up `MutationObserver` on the element to watch for child list changes.
   - On intersection callback: find topmost visible `.FreestyleSubsection.is-showing` element, read its `data-section`/`data-subsection`, update service.
   - On mutation callback: re-scan and re-observe `.FreestyleSubsection.is-showing` elements.
   - Cleans up both observers via `willDestroy()`.

9. **`app/modifiers/freestyle-scroll-spy.js`**
   - Re-export from addon (standard v1 addon pattern): `export { default } from 'ember-freestyle/modifiers/freestyle-scroll-spy';`

## Testing

### Integration Tests

- **FreestyleMenu filter:** Render menu with known sections/subsections registered in the service. Type in search input, assert correct items visible, section headers preserved.
- **FreestyleMenu collapse:** Render menu, assert subsections hidden by default. Click chevron, assert subsections become visible. Click again, assert hidden.
- **FreestyleMenu keyboard:** Focus search input, simulate Arrow Down/Up/Enter/Escape via `triggerKeyEvent`, assert highlight class moves and navigation fires.
- **Scroll spy modifier:** Mount modifier on a scrollable container with mock subsection elements, scroll, assert service properties update.

### Acceptance Tests

- Navigate to freestyle guide, verify all sections collapsed by default.
- Click chevron on section header, verify subsection list expands without navigating.
- Click section name, verify it navigates and expands.
- Type in search input, verify filtering works and matching sections auto-expand.
- Use arrow keys in search, verify highlight moves through subsections.
- Press Enter on highlighted item, verify navigation occurs.
- Scroll content in "All" mode, verify sidebar highlight follows the topmost visible subsection.
- Verify sidebar auto-scrolls to keep active item visible.

## Non-Goals

- Changing the two-level section/subsection data model.
- Recursive/infinite nesting.
- Changes to `FreestyleSection` or `FreestyleUsage` components (only `FreestyleSubsection` gets data attributes).
- Fixing the `@glimmer/syntax` "slicing source" warning (that's an ember-source upgrade).
- Changing query param routing behavior or the controller.
- Animated collapse/expand transitions.
