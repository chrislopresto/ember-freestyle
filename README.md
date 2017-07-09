# Ember Freestyle

[![Build Status](https://travis-ci.org/chrislopresto/ember-freestyle.svg?branch=master)](https://travis-ci.org/chrislopresto/ember-freestyle)
[![npm version](https://badge.fury.io/js/ember-freestyle.svg)](https://badge.fury.io/js/ember-freestyle)
![Download count all time](https://img.shields.io/npm/dt/ember-freestyle.svg)
[![Ember Observer Score](http://emberobserver.com/badges/ember-freestyle.svg)](http://emberobserver.com/addons/ember-freestyle)

Ember Freestyle is an Ember addon that allows you to quickly create a component explorer for your Ember app.

[Documentation found here](http://ember-freestyle.com/)

## Live Demo

http://chrislopresto.github.io/ember-freestyle/

## Supported Ember versions

- For Ember versions >= 2.8, use the latest published version
- For Ember versions 1.13.0 through 2.7, use ember-freestyle 0.3.0

## Installation

This installation process is opinionated in order to get you going quickly. We want to make everything much easier to use in the near future. Please report any problems, and as always, PRs are welcome.

1. `ember install ember-freestyle`

    This will do the following:

    - Install the `ember-freestyle` addon itself
    - Add a `freestyle` template in your app
    - Add a `freestyle` controller in your app

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
  {{#freestyle-section name="Visual Style" as |section|}}
    {{#section.subsection name="Typography"}}
      {{#freestyle-usage "visual-style-typography-foo" title="Foo Typography"}}
        {{x-foo-typography}}
      {{/freestyle-usage}}
    {{/section.subsection}}

    {{#section.subsection name="Colors"}}
      {{#freestyle-usage "visual-style-colors-fie" title='Fie Colors'}}
        {{x-fie-colors}}
      {{/freestyle-usage}}
    {{/section.subsection}}
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
{{#freestyle-collection title="Foo Component In Every State" defaultKey="with-icon" inline=true as |collection|}}
  {{#collection.variant key="no-num"}}
    {{#freestyle-usage "foo-foo-no-num" title="Information"}}
      {{foo-foo title="Information"}}
    {{/freestyle-usage}}
  {{/collection.variant}}

  {{#collection.variant key="with-num"}}
    {{#freestyle-usage "foo-foo-people" title="People"}}
      {{foo-foo title="People" num=55}}
    {{/freestyle-usage}}
  {{/collection.variant}}

  {{#collection.variant key="with-icon"}}
    {{#freestyle-usage "foo-foo-twitter" title="Twitter"}}
      {{foo-foo title="Twitter" icon="twitter"}}
    {{/freestyle-usage}}
  {{/collection.variant}}
{{/freestyle-collection}}
```

#### freestyle-note + freestyle-annotation

_TODO:_ [Simplify Technique for Including Notes](https://github.com/chrislopresto/ember-freestyle/issues/61)

Use the `freestyle-note` component to add a markdown note for a specific `freestyle-usage`. Note that the `freestyle-note` slug must match the `freestyle-usage` slug followed by `--notes`.

```hbs
{{#freestyle-usage "globally-unique-slug" title="Title To Display In Style Guide"}}
  {{x-foo propa="aaa" propb="bbb"}}
{{/freestyle-usage}}
{{#freestyle-note "globally-unique-slug--notes"}}
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

## Removing Ember Freestyle from Your Production Payload

We recommend blacklisting Ember Freestyle for production builds using Ember CLI's [addon blacklist feature](https://ember-cli.com/user-guide/#whitelisting-and-blacklisting-assets).

```javascript
var environment = process.env.EMBER_ENV;
var pluginsToBlacklist = environment === 'production' ? ['ember-freestyle'] : [];

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    addons: {
      blacklist: pluginsToBlacklist
    }
  };
}
```

## Using Ember Freestyle Within an Addon

### Dependency Configuration

You should include Ember Freestyle as a devDependency so that apps using your addon will not include
Ember Freestyle CSS and JavaScript in their production payloads.

### Code Snippets

You will need to tell the build where to search for code snippets as follows:

##### ember-cli-build.js

```javascript
var app = new EmberAddon(defaults, {
  // ...
  freestyle: {
    snippetSearchPaths: ['addon', 'tests/dummy/app']
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

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
