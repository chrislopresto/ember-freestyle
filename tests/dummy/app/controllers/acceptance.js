import FreestyleController from 'ember-freestyle/controllers/freestyle';
import { cssVariable } from 'ember-freestyle';

export default class extends FreestyleController {
  color = null;
  colorPalette = null;
  dynamicProperties = null;
  fractionComplete = 0.4;
  isCancelled = false;
  isComplete = false;
  size = 24;
  @cssVariable progressIconBackgroundColor;
  @cssVariable progressIconStrokeColor;

  color = {
    name: 'amber',
    base: '#ffc107',
  };
  colorPalette = {
    primary: {
      name: 'cyan',
      description: 'something toply cyanish',
      base: '#00bcd4',
      light: '#b2ebf2',
      dark: '#0097a7',
    },
    accent: {
      name: 'amber',
      base: '#ffc107',
    },
    secondary: {
      name: 'greyish',
      base: '#b6b6b6',
    },
    foreground: {
      name: 'blackish',
      base: '#212121',
      light: '#727272',
    },
    background: {
      name: 'white',
      base: '#ffffff',
    },
  };
  dynamicProperties = {
    blockContent: {
      value: 'Dynamic Block Content',
      inputType: 'textarea',
    },
    size: {
      value: 'medium',
      inputType: 'select',
      options: ['small', 'medium', 'large'],
    },
    rank: {
      value: 10,
      inputType: 'number',
    },
    isVisible: {
      value: true,
      inputType: 'checkbox',
    },
    isTasteful: {
      value: false,
      inputType: 'checkbox',
      description: 'Changes to a tasteful color scheme',
    },
    innerBorderThickness: {
      value: 1,
      inputType: 'range',
      min: 0,
      max: 20,
      description: 'Width of the inner border, in pixels',
    },
  };
}
