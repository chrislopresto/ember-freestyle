import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestContext } from '@ember/test-helpers';
import { ColorPalette } from 'ember-freestyle/components/freestyle-palette';

interface Context extends TestContext {
  colorPalette: ColorPalette;
}

const COLOR_PALETTE = {
  black: {
    base: 'black',
    name: 'Black',
  },
  white: {
    base: 'white',
    name: 'White',
  },
};

module('Integration | Component | freestyle-palette', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: Context) {
    this.colorPalette = {};
  });

  test('it renders a color palette', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestylePalette
        @colorPalette={{this.colorPalette}}
      />
    `);

    assert.dom('.FreestylePaletteItem').doesNotExist();

    this.set('colorPalette', COLOR_PALETTE);

    assert.dom('.FreestylePaletteItem').exists({ count: 2 });

    const paletteItems = findAll('.FreestylePaletteItem');

    Object.keys(COLOR_PALETTE).forEach(
      (key: 'black' | 'white', index: number) => {
        const paletteItemHex = paletteItems[index].querySelector(
          '.FreestylePaletteItem-hex',
        );
        const paletteItemName = paletteItems[index].querySelector(
          '.FreestylePaletteItem-name',
        );

        assert.dom(paletteItemHex).hasText(COLOR_PALETTE[key].base);
        assert.dom(paletteItemName).hasText(COLOR_PALETTE[key].name);
      },
    );
  });

  test('it renders a title', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestylePalette
        @colorPalette={{this.colorPalette}}
      />
    `);

    assert.dom('.FreestylePalette-title').hasText('Freestyle Palette');

    await render<Context>(hbs`
      <FreestylePalette
        @colorPalette={{this.colorPalette}}
        @title="Different Title"
      />
    `);

    assert.dom('.FreestylePalette-title').hasText('Different Title');
  });

  test('it renders a description', async function (this: Context, assert) {
    await render<Context>(hbs`
      <FreestylePalette
        @colorPalette={{this.colorPalette}}
      />
    `);

    assert
      .dom('.FreestylePalette-description')
      .hasText('Represents all colors used in this project.');

    await render<Context>(hbs`
      <FreestylePalette
        @colorPalette={{this.colorPalette}}
        @description="Different description."
      />
    `);

    assert
      .dom('.FreestylePalette-description')
      .hasText('Different description.');
  });
});
