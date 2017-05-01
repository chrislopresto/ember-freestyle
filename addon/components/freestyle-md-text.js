import Ember from 'ember';
import MDTextComponent from 'ember-remarkable/components/md-text';

const { computed } = Ember;

export default MDTextComponent.extend({
  parsedMarkdownUnsafe: computed('text', 'html', 'typographer', 'linkify', 'linkTarget', function () {
    let html = this._super(...arguments);
    // HACK: Add hljs class for compatibility with latest highlight.js CSS
    //       This should really be done with a `custom_fence` rule as
    //       described here:
    //       https://github.com/jonschlinkert/remarkable/issues/131
    return html.replace(/<pre>/g, '<pre class="hljs">');
  })
});
