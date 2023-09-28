import Component from '@glimmer/component';
import { A } from '@ember/array';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reads } from 'macro-decorators';

type Color = string;

export interface PaletteItem {
  name: string;
  description?: string;
  base: Color;
  light?: Color;
  dark?: Color;
}
export type ColorPalette = Record<string, PaletteItem>;

interface Signature {
  Element: HTMLDivElement;
  Args: {
    colorPalette: ColorPalette;
    title?: string;
    description?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class FreestylePalette extends Component<Signature> {
  @reads('args.title', 'Freestyle Palette') declare title: string;
  @reads('args.description', 'Represents all colors used in this project.')
  declare description: string;

  get colors(): PaletteItem[] {
    const colorPalette = this.args.colorPalette;
    return A(
      Object.keys(colorPalette).map((k) => {
        return colorPalette[k];
      }),
    );
  }
}
