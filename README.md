# Ember Freestyle

[![Build Status](https://travis-ci.org/chrislopresto/ember-freestyle.svg?branch=master)](https://travis-ci.org/chrislopresto/ember-freestyle)
[![npm version](https://badge.fury.io/js/ember-freestyle.svg)](https://badge.fury.io/js/ember-freestyle)
![Download count all time](https://img.shields.io/npm/dt/ember-freestyle.svg)
[![Ember Observer Score](http://emberobserver.com/badges/ember-freestyle.svg)](http://emberobserver.com/addons/ember-freestyle)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-34-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Ember Freestyle is an Ember addon that allows you to quickly create a component explorer for your Ember app.

## Documentation

This README provides a lightweight overview of Ember Freestyle to get you going. More complete documentation can be found at https://chrislopresto.github.io/ember-freestyle

## Live Demo

To see Ember Freestyle in action, visit [https://chrislopresto.github.io/ember-freestyle/#/acceptance](https://chrislopresto.github.io/ember-freestyle/#/acceptance)

### Compatibility

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

### Support

Ember Freestyle support is only provided for the 2 latest Ember versions

Installation
------------------------------------------------------------------------------

This installation process is opinionated in order to get you going quickly.

1. `ember install ember-freestyle`

    This will do the following:

    - Install the `ember-freestyle` addon itself
    - Add a `freestyle` template in your app
    - Add a `freestyle` controller in your app

    *Note:* Ember CLI versions < 0.2.3 should use `ember install:addon` instead of `ember install`

1. Add `this.route('freestyle');` to your `router.js` file
1. Navigate to `/freestyle`. You should now see something like:

    ![](doc/freestyle-generated.png)

All of the generated output is optional. If you don't want a `freestyle` route, for example, feel free to get rid of it in and add a `freestyle-guide` somewhere else in your app.

You can use the `freestyle-guide` component anywhere you'd like in your app. You can organize your components into multiple Freestyle guides if you want to. You can even use the constituent components like `freestyle-usage` on their own.

## Problems? No problem.

Hopefully the installation instructions got you off to a smooth, seamless start. If you have any problems, feel free to chat with us in the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or [open an issue](https://github.com/chrislopresto/ember-freestyle/issues/new). As always, PRs are welcome!

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

## Running

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://chrislopresto.com"><img src="https://avatars0.githubusercontent.com/u/93691?v=4" width="100px;" alt=""/><br /><sub><b>Chris LoPresto</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=chrislopresto" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=chrislopresto" title="Documentation">📖</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=chrislopresto" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://www.lukemelia.com/devblog"><img src="https://avatars2.githubusercontent.com/u/353?v=4" width="100px;" alt=""/><br /><sub><b>Luke Melia</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=lukemelia" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=lukemelia" title="Documentation">📖</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=lukemelia" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://onebar.io/"><img src="https://avatars1.githubusercontent.com/u/1834162?v=4" width="100px;" alt=""/><br /><sub><b>Andrew Fan</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=andrewfan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/chrisvdp"><img src="https://avatars3.githubusercontent.com/u/1924349?v=4" width="100px;" alt=""/><br /><sub><b>Chris van der Ploeg</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=chrisvdp" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=chrisvdp" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ilyaradchenko.com"><img src="https://avatars0.githubusercontent.com/u/34726?v=4" width="100px;" alt=""/><br /><sub><b>Ilya Radchenko</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=knownasilya" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=knownasilya" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mszoernyi"><img src="https://avatars2.githubusercontent.com/u/668269?v=4" width="100px;" alt=""/><br /><sub><b>Mike Szörnyi</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=mszoernyi" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=mszoernyi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/migbar"><img src="https://avatars3.githubusercontent.com/u/33972?v=4" width="100px;" alt=""/><br /><sub><b>miguel barcos</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=migbar" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://digivine.com"><img src="https://avatars3.githubusercontent.com/u/175123?v=4" width="100px;" alt=""/><br /><sub><b>Nathan Ward</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=vine77" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=vine77" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/zidjian257"><img src="https://avatars0.githubusercontent.com/u/14352088?v=4" width="100px;" alt=""/><br /><sub><b>zidjian257</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=zidjian257" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=zidjian257" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://elidupuis.com"><img src="https://avatars3.githubusercontent.com/u/196410?v=4" width="100px;" alt=""/><br /><sub><b>Eli Dupuis</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=elidupuis" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wagenet"><img src="https://avatars3.githubusercontent.com/u/9835?v=4" width="100px;" alt=""/><br /><sub><b>Peter Wagenet</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=wagenet" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/sivakumar_k/"><img src="https://avatars3.githubusercontent.com/u/604117?v=4" width="100px;" alt=""/><br /><sub><b>Sivakumar Kailasam</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=sivakumar-kailasam" title="Code">💻</a></td>
    <td align="center"><a href="https://www.funkensturm.com"><img src="https://avatars1.githubusercontent.com/u/54812?v=4" width="100px;" alt=""/><br /><sub><b>Manuel Wiedenmann</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=fsmanuel" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LucasHill"><img src="https://avatars1.githubusercontent.com/u/427333?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Hill</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=LucasHill" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://breadapp.com"><img src="https://avatars1.githubusercontent.com/u/1156745?v=4" width="100px;" alt=""/><br /><sub><b>Alex Zlotnik</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=zlotnika" title="Code">💻</a></td>
    <td align="center"><a href="http://tamzinblake.me"><img src="https://avatars1.githubusercontent.com/u/55923?v=4" width="100px;" alt=""/><br /><sub><b>Tamzin Blake</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=tamzinblake" title="Code">💻</a></td>
    <td align="center"><a href="https://www.kaliber5.de"><img src="https://avatars0.githubusercontent.com/u/1325249?v=4" width="100px;" alt=""/><br /><sub><b>Simon Ihmig</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=simonihmig" title="Documentation">📖</a></td>
    <td align="center"><a href="http://ryantablada.com"><img src="https://avatars2.githubusercontent.com/u/2532004?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Tablada</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=rtablada" title="Code">💻</a></td>
    <td align="center"><a href="https://kerricklong.com/"><img src="https://avatars1.githubusercontent.com/u/552093?v=4" width="100px;" alt=""/><br /><sub><b>Kerrick Long</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=Kerrick" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dajk"><img src="https://avatars2.githubusercontent.com/u/9277302?v=4" width="100px;" alt=""/><br /><sub><b>Hajdukovic Radovan</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=dajk" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=dajk" title="Documentation">📖</a></td>
    <td align="center"><a href="http://robabby.com"><img src="https://avatars1.githubusercontent.com/u/736269?v=4" width="100px;" alt=""/><br /><sub><b>Rob</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=robabby" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.gijsbotje.nl"><img src="https://avatars2.githubusercontent.com/u/7714133?v=4" width="100px;" alt=""/><br /><sub><b>Gijs Boddeus</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=gijsbotje" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/scanieso"><img src="https://avatars2.githubusercontent.com/u/786971?v=4" width="100px;" alt=""/><br /><sub><b>Sarah Canieso</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=scanieso" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Dhaulagiri"><img src="https://avatars1.githubusercontent.com/u/1672302?v=4" width="100px;" alt=""/><br /><sub><b>Brian Runnells</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=Dhaulagiri" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/danwenzel"><img src="https://avatars0.githubusercontent.com/u/11724146?v=4" width="100px;" alt=""/><br /><sub><b>Dan Wenzel</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=danwenzel" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=danwenzel" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/ctjhoa"><img src="https://avatars2.githubusercontent.com/u/1716173?v=4" width="100px;" alt=""/><br /><sub><b>Camille TJHOA</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=ctjhoa" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=ctjhoa" title="Documentation">📖</a></td>
    <td align="center"><a href="http://forge512.com"><img src="https://avatars1.githubusercontent.com/u/144861?v=4" width="100px;" alt=""/><br /><sub><b>Michael Swanson</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=mswanson" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Windvis"><img src="https://avatars3.githubusercontent.com/u/3533236?v=4" width="100px;" alt=""/><br /><sub><b>Sam Van Campenhout</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=Windvis" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.chriskrycho.com"><img src="https://avatars0.githubusercontent.com/u/2403023?v=4" width="100px;" alt=""/><br /><sub><b>Chris Krycho</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=chriskrycho" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bagby"><img src="https://avatars2.githubusercontent.com/u/176297?v=4" width="100px;" alt=""/><br /><sub><b>Will Bagby</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=bagby" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=bagby" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/NoahFisher"><img src="https://avatars3.githubusercontent.com/u/3476655?v=4" width="100px;" alt=""/><br /><sub><b>Noah</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=NoahFisher" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/fivetanley"><img src="https://avatars0.githubusercontent.com/u/1275021?v=4" width="100px;" alt=""/><br /><sub><b>Stanley Stuart</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=fivetanley" title="Code">💻</a></td>
    <td align="center"><a href="https://mcmanus.io"><img src="https://avatars2.githubusercontent.com/u/9383?v=4" width="100px;" alt=""/><br /><sub><b>Matt McManus</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=mattmcmanus" title="Code">💻</a></td>
    <td align="center"><a href="http://suzidao.com"><img src="https://avatars0.githubusercontent.com/u/6305709?v=4" width="100px;" alt=""/><br /><sub><b>Suzi Dao</b></sub></a><br /><a href="https://github.com/chrislopresto/ember-freestyle/commits?author=suzidao" title="Code">💻</a> <a href="https://github.com/chrislopresto/ember-freestyle/commits?author=suzidao" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
