# [WIP] Ember Freestyle [![Build Status](https://travis-ci.org/chrislopresto/ember-freestyle.svg?branch=master)](https://travis-ci.org/chrislopresto/ember-freestyle)

Ember Freestyle is an Ember addon that allows you to quickly create a living styleguide for your Ember app. Whereas
other living style guide projects showcase current CSS using dummy HTML, Ember Freestyle presents existing Ember
components from your app in a dedicated living style guide.

*This is a work in progress. Collaboration is welcomed.*

## Installation

This installation process is opinionated in order to get you going quickly. We want to make everything much easier to use in the near future. Please report any problems, and as always, PRs are welcome.

1. `ember install ember-freestyle`

    This will do the following:

    - Install the `ember-freestyle` addon itself
    - Install additional highlight.js and remarkable dependencies (which will eventually be made optional)
    - Add a `freestyle` template in your app
    - Add a `freestyle` controller in your app
    - Add an `app.scss` file with the required SCSS
        - You can type `n` to decline this as long as you add `@import 'ember-freestyle';` somewhere in your SCSS

    *Note:* Ember CLI versions < 0.2.3 should use `ember install:addon` instead of `ember install`

1. Add `this.route('freestyle');` to your `router.js` file
1. Navigate to `/freestyle`. You should now see something like:
    ![](public/freestyle-generated.png)

## Introduction

### Anatomy of a Basic Style Guide

Here is a simple style guide, where `{{loading-spinner}}` is a hypothetical component **in your application**.

```hbs
{{#freestyle-guide title="My Living Style Guide" subtitle="Showcasing My App's Components"}}
  {{#freestyle-section name="UI Elements"}}
    {{#freestyle-usage "loading-spinner" title="Loading Spinner"}}
      {{loading-spinner}}
    {{/freestyle-usage}}
  {{/freestyle-section}}
{{/freestyle-guide}}
```

### Components

Here's a brief rundown of the components Ember Freestyle provides for adding a living style guide in your app:

#### freestyle-guide

The `freestyle-guide` component provides the user interface for a style guide. It includes a header section and
navigation controls.

#### freestyle-usage

The `freestyle-usage` component is the workhorse. Wrap your application's components with a `freestyle-usage`
component, being sure to provide a unique slug (positional param) as follows:

```hbs
{{#freestyle-usage "globally-unique-slug" title="Title To Display In Style Guide"}}
  {{x-foo propa="aaa" propb="bbb"}}
{{/freestyle-usage}}
```

The snippet above will render your app's `x-foo` component as well as a handlebars snippet demonstrating how to use it.

#### freestyle-section

Optionally group your `freestyle-usage`-wrapped components into sections using the `freestyle-section` component. The
`freestyle-section` component registers itself in order to appear in the navigation provided by the `freestyle-guide`
component.

#### freestyle-subsection

Optionally divide your style guide sections into subsections using the `freestyle-subsection` component.

```hbs
{{#freestyle-guide title="My Living Style Guide" subtitle="Showcasing My App's Components"}}
  {{#freestyle-section name='Visual Style' as |fsg|}}
    {{#fsg.subsection name='Typography'}}
      {{#freestyle-usage 'visual-style-typography-foo' title='Foo Typography'}}
        {{x-foo-typography}}
      {{/freestyle-usage}}
    {{/fsg.subsection}}

    {{#fsg.subsection name='Colors'}}
      {{#freestyle-usage 'visual-style-colors-fie' title='Fie Colors'}}
        {{x-fie-colors}}
      {{/freestyle-usage}}
    {{/fsg.subsection}}
  {{/freestyle-section}}
{{/freestyle-guide}}
```

The snippet above will create a style guide with one 'Visual Style' section with separate subsections for
'Typography' and 'Colors'. Your app's `x-foo-typography` and `x-fie-colors` components would show up in the
appropriate subsections.

**NOTE:** For subsection navigation to work properly, the `freestyle-section` component must yield itself as Showcasing
in the above snippet. This limitation will be removed in a forthcoming release.

#### freestyle-collection + freestyle-variant

Documentation coming soon...

#### freestyle-note + freestyle-annotation

Documentation coming soon...

## Customizing the Colors in Ember Freestyle's Own UI

If you wish to change things like the color of UI elements like the lines that divide the `freestyle-guide` header and body or the colors of active links, you can do so by overriding any of the following SCSS variables *before* importing the `ember-freestyle` SCSS partial in your application's SCSS:

- `$FreestyleGuide-color--primary`
- `$FreestyleGuide-color--accent`
- `$FreestyleGuide-color--secondary`
- `$FreestyleGuide-color--foreground`
- `$FreestyleGuide-color--background`

##### Example

This SCSS will change the default (teal) UI elements to red in your application.

```scss
$FreestyleGuide-color--primary: #ff0000;
@import 'ember-freestyle';
```

## Using Ember Freestyle Within an Addon

When using Ember Freestyle within an addon, you will need to tell the build where to search for code snippets
as follows:

##### ember-cli-build.js

```javascript
var app = new EmberAddon(defaults, {
  // ...
  snippetSearchPaths: ['tests/dummy/app', 'app/styles']
});
```

When running `ember install ember-freestyle` within an addon, the generator will attempt to put the freestyle
template, controller, and scss import in the wrong place. This is a known issue... please do help fix it if you
are so inclined.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
