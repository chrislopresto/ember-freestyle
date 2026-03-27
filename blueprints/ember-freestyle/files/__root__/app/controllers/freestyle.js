import BaseFreestyleController from 'ember-freestyle/controllers/freestyle';
import { service } from '@ember/service';

export default class FreestyleController extends BaseFreestyleController {
  @service emberFreestyle;

  colorPalette = {
    primary: {
      name: 'cyan',
      base: '#00bcd4',
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
    },
    background: {
      name: 'white',
      base: '#ffffff',
    },
  };
}
