import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

export default FreestyleController.extend({
  emberFreestyle: service(),
  showCode: alias('emberFreestyle.showCode'),

  dynamicProperties: computed(function () {
    return {
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
  }),

  /* BEGIN-FREESTYLE-USAGE fpi--notes
### A few notes regarding freestyle-palette-item

- Accepts a color object
- Looks very nice

And another thing...

###### Markdown note demonstrating prettified code

```
import Ember from 'ember';

export default Ember.Component.extend({
  // ...
  color: {
    name: 'amber',
    base: '#ffc107'
  }
  // ...
});
```
  END-FREESTYLE-USAGE */

  colorPalette: computed(function () {
    return {
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
  }),

  // BEGIN-FREESTYLE-USAGE fpi
  color: computed(function () {
    return {
      name: 'amber',
      base: '#ffc107',
    };
  }),
  // END-FREESTYLE-USAGE
});
