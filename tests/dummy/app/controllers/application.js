import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { computed, inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),
  showCode: computed.alias('emberFreestyle.showCode'),

  /* BEGIN-FREESTYLE-USAGE fpi:notes
### A few notes regarding freestyle-palette-item

This is something to concsider.

- Accepts a color object
- Looks very nice

And another thing.

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

  // BEGIN-FREESTYLE-USAGE fpi
  color: {
    name: 'amber',
    base: '#ffc107'
  }
  // END-FREESTYLE-USAGE
});
