# Ember Freestyle [![Build Status](https://travis-ci.org/chrislopresto/ember-freestyle.svg?branch=master)](https://travis-ci.org/chrislopresto/ember-freestyle)

Ember Freestyle is an Ember addon that allows you to quickly create a living styleguide for your Ember app. Whereas
other living style guide projects showcase current CSS using dummy HTML, Ember Freestyle presents existing Ember
components from your app in a dedicated living style guide.

[Documentation found here](http://ember-freestyle.com/)

*This is a work in progress. Collaboration is welcomed.*

## Live Demo

http://chrislopresto.github.io/ember-freestyle/

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
    ![](doc/freestyle-generated.png)

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
  {{#freestyle-section name='Visual Style' as |section|}}
    {{#freestyle-subsection name='Typography' section=section}}
      {{#freestyle-usage 'visual-style-typography-foo' title='Foo Typography'}}
        {{x-foo-typography}}
      {{/freestyle-usage}}
    {{/freestyle-subsection}}
    {{#freestyle-subsection name='Colors' section=section}}
      {{#freestyle-usage 'visual-style-colors-fie' title='Fie Colors'}}
        {{x-fie-colors}}
      {{/freestyle-usage}}
    {{/freestyle-subsection}}
  {{/freestyle-section}}
{{/freestyle-guide}}
```

The snippet above will create a style guide with one 'Visual Style' section with separate subsections for
'Typography' and 'Colors'. Your app's `x-foo-typography` and `x-fie-colors` components would show up in the
appropriate subsections.

**NOTE:** For subsection navigation to work properly, the `freestyle-section` component must yield itself as Showcasing
in the above snippet. This limitation will be removed in a forthcoming release.

#### freestyle-collection + freestyle-variant

Use the `freestyle-collection` component with nested `freestyle-variant` components to present multiple versions
of a component. This is very useful for presenting and testing a component in each state it must handle
in your application.

By default, variants will be stacked. If you wish to view variants side by side, set the `inline` property of
`freestyle-collection` to true.

```hbs
{{#freestyle-collection title='Foo Component In Every State' defaultKey='with-icon' inline=true as |collection|}}
  {{#freestyle-variant collection=collection key='no-num'}}
    {{#freestyle-usage "foo-foo-no-num" title="Information"}}
      {{foo-foo title="Information"}}
    {{/freestyle-usage}}
  {{/freestyle-variant}}

  {{#freestyle-variant collection=collection key='with-num'}}
    {{#freestyle-usage "foo-foo-people" title="People"}}
      {{foo-foo title="People" num=55}}
    {{/freestyle-usage}}
  {{/freestyle-variant}}

  {{#freestyle-variant collection=collection key='with-icon'}}
    {{#freestyle-usage "foo-foo-twitter" title="Twitter"}}
      {{foo-foo title="Twitter" icon="twitter"}}
    {{/freestyle-usage}}
  {{/freestyle-variant}}
{{/freestyle-collection}}
```

#### freestyle-note + freestyle-annotation

_TODO:_ [Simplify Technique for Including Notes](https://github.com/chrislopresto/ember-freestyle/issues/61)

Use the `freestyle-note` component to add a markdown note for a specific `freestyle-usage`. Note that the `freestyle-note` slug must match the `freestyle-usage` slug followed by `:notes`.

```hbs
{{#freestyle-usage "globally-unique-slug" title="Title To Display In Style Guide"}}
  {{x-foo propa="aaa" propb="bbb"}}
{{/freestyle-usage}}
{{#freestyle-note "globally-unique-slug:notes"}}
  # Contextual Markdown Note for x-foo

  You can write helpful _markdown_ notes explaining how the
  `x-foo` component works.
{{/freestyle-note}}
```

Use the `freestyle-annotation` component to add a general purpose note.

```hbs
{{#freestyle-annotation}}
<h1>Contextual HTML Note for Anything in the Freestyle Guide</h1>

<p>
  You can write helpful HTML notes explaining anything in the
  Freestyle guide.
</p>
{{/freestyle-annotation}}
```

Both the `freestyle-note` and `freestyle-annotation` components respect the
`Show Notes` usage controls preference.

## Customizing Ember Freestyle's Own UI

If you wish to change things like the color of UI elements like the lines that divide the `freestyle-guide` header and body or the colors of active links, you can do so by overriding theme settings in your Freestyle configuration.

TODO fully document available variables?

##### Example

This configuration will change the default (teal) UI elements to red in your application, and raise the maximum width of the entire style guide to 1400px.

```js
freestyle: {
  theme: {
    guide: {
      maxWidth: '1400px'
    },
    colors: {
      primary: '#ff0000'
    }
  }
}
```

## Using Ember Freestyle Within an Addon

When using Ember Freestyle within an addon, you will need to tell the build where to search for code snippets
as follows:

##### ember-cli-build.js

```javascript
var app = new EmberAddon(defaults, {
  // ...
  freestyle: {
    snippetSearchPaths: ['tests/dummy/app', 'app/styles']
  }
});
```

## Generating the Changelog

This project uses [https://github.com/skywinder/github-changelog-generator](https://github.com/skywinder/github-changelog-generator) to generate its changelog.

`github_changelog_generator --future-release=x.y.z`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
