import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

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

  test('it renders a color palette', async function (assert) {
    await render(hbs`
      <FreestylePalette
        @colorPalette={{hash}}
      />
    `);

    assert.dom('.FreestylePaletteItem').doesNotExist();

    this.colorPalette = COLOR_PALETTE;

    await render(hbs`
      <FreestylePalette
        @colorPalette={{this.colorPalette}}
      />
    `);

    assert.dom('.FreestylePaletteItem').exists({ count: 2 });

    const paletteItems = this.element.querySelectorAll('.FreestylePaletteItem');

    Object.keys(COLOR_PALETTE).forEach((key, index) => {
      const paletteItemHex = paletteItems[index].querySelector(
        '.FreestylePaletteItem-hex'
      );
      const paletteItemName = paletteItems[index].querySelector(
        '.FreestylePaletteItem-name'
      );

      assert.dom(paletteItemHex).hasText(COLOR_PALETTE[key].base);
      assert.dom(paletteItemName).hasText(COLOR_PALETTE[key].name);
    });
  });

  test('it renders a title', async function (assert) {
    await render(hbs`
      <FreestylePalette
        @colorPalette={{hash}}
      />
    `);

    assert.dom('.FreestylePalette-title').hasText('Freestyle Palette');

    await render(hbs`
      <FreestylePalette
        @colorPalette={{hash}}
        @title="Different Title"
      />
    `);

    assert.dom('.FreestylePalette-title').hasText('Different Title');
  });

  test('it renders a description', async function (assert) {
    await render(hbs`
      <FreestylePalette
        @colorPalette={{hash}}
      />
    `);

    assert
      .dom('.FreestylePalette-description')
      .hasText('Represents all colors used in this project.');

    await render(hbs`
      <FreestylePalette
        @colorPalette={{hash}}
        @description="Different description."
      />
    `);

    assert
      .dom('.FreestylePalette-description')
      .hasText('Different description.');
  });
});
