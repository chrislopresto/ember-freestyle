import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { computed, inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),
  showCode: computed.alias('emberFreestyle.showCode'),

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

  colorPalette: {
    primary: {
      name: 'cyan',
      description: 'something toply cyanish',
      base: '#00bcd4',
      light: '#b2ebf2',
      dark: '#0097a7'
    },
    accent: {
      name: 'amber',
      base: '#ffc107'
    },
    secondary: {
      name: 'greyish',
      base: '#b6b6b6'
    },
    foreground: {
      name: 'blackish',
      base: '#212121',
      light: '#727272'
    },
    background: {
      name: 'white',
      base: '#ffffff'
    }
  },

  // BEGIN-FREESTYLE-USAGE fpi
  color: {
    name: 'amber',
    base: '#ffc107'
  }
  // END-FREESTYLE-USAGE
});
