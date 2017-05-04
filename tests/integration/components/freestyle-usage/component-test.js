import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import usage from '../../../pages/usage-component';
import Ember from 'ember';

// Stub freestyle service
const FreestyleStub = Ember.Service.extend({
  highlight: function() {}
});

let notesSnippets = {
  'componentA--notes.js': 'JS notes for component A',
  'componentA--notes.hbs': 'HBS notes for component A',
  'componentA--notes.scss': 'SCSS notes for component A'
};

let codeSnippets = {
  'componentA--usage.hbs': 'HBS USAGE for component A',
  'componentA.hbs': 'HBS code for component A',
  'componentA.js': 'JS CODE for component A',
  'componentA.scss': 'SCSS code for component A'
};

let allSnippets = Ember.merge(notesSnippets, codeSnippets);

moduleForComponent('freestyle-usage', 'Integration | Component | freestyle usage', {
  integration: true,

  beforeEach() {
    this.register('service:emberFreestyle', FreestyleStub);
    this.inject.service('emberFreestyle');
    usage.setContext(this);
  },

  afterEach() {
    usage.removeContext();
  }
});

test('it renders the title and the focus button if a title is passed in and the guide is set to show labels', function(assert) {
  assert.expect(3);

  this.set('emberFreestyle.showLabels', true);

  this.render(hbs`
    {{#freestyle-usage 'componentA' title='Title A'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.numTitles, 1);
  assert.equal(usage.numFocusButtons, 1);
  assert.equal(usage.title, 'Title A');
});

test('it does not render the title if the guide is set to not show labels', function(assert) {
  assert.expect(2);

  this.set('emberFreestyle.showLabels', false);

  this.render(hbs`
    {{#freestyle-usage 'componentA' title='Title A'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.numTitles, 0);
  assert.equal(usage.numFocusButtons, 0);
});

test('it renders the passed in block', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.content, 'hello from component A');
});

test('it renders the notes snippets', function(assert) {
  assert.expect(4);
  this.set('emberFreestyle.showNotes', true);

  this.set('emberFreestyle.snippets', notesSnippets);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.notesSection.snippets().count, 3);
  assert.equal(usage.notesSection.snippets(0).text, 'JS notes for component A');
  assert.equal(usage.notesSection.snippets(1).text, 'HBS notes for component A');
  assert.equal(usage.notesSection.snippets(2).text, 'SCSS notes for component A');
});

test('it renders only the notes snippets that have content', function(assert) {
  assert.expect(4);
  this.set('emberFreestyle.showNotes', true);

  let incompleteNotesSnippets = {
    'componentA--notes.js': 'JS notes for component A',
    // no content for 'componentA--notes.hbs'
    'componentA--notes.scss': 'SCSS notes for component A'
  };
  this.set('emberFreestyle.snippets', incompleteNotesSnippets);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.notesSection.snippets().count, 3);
  assert.equal(usage.notesSection.snippets(0).text, 'JS notes for component A');
  assert.equal(usage.notesSection.snippets(1).text, '');
  assert.equal(usage.notesSection.snippets(2).text, 'SCSS notes for component A');
});

test('it does not render the notes snippets if the guide is set to not show notes', function(assert) {
  assert.expect(1);
  this.set('emberFreestyle.showNotes', false);

  this.set('emberFreestyle.snippets', notesSnippets);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.numNotesSection, 0);
});

test('it renders the code snippets', function(assert) {
  assert.expect(5);
  this.set('emberFreestyle.showCode', true);

  this.set('emberFreestyle.snippets', codeSnippets);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.usageSection.snippets().count, 4);
  assert.equal(usage.usageSection.snippets(0).text, 'HBS USAGE for component A');
  assert.equal(usage.usageSection.snippets(1).text, 'HBS code for component A');
  assert.equal(usage.usageSection.snippets(2).text, 'JS CODE for component A');
  assert.equal(usage.usageSection.snippets(3).text, 'SCSS code for component A');
});

test('it renders only the code snippets that have content', function(assert) {
  assert.expect(5);
  this.set('emberFreestyle.showCode', true);

  let incompleteCodeSnippets = {
    'componentA--usage.hbs': 'HBS USAGE for component A',
    'componentA.hbs': 'HBS code for component A',
    // no content for 'componentA.js'
    'componentA.scss': 'SCSS code for component A'
  };
  this.set('emberFreestyle.snippets', incompleteCodeSnippets);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.usageSection.snippets().count, 4);
  assert.equal(usage.usageSection.snippets(0).text, 'HBS USAGE for component A');
  assert.equal(usage.usageSection.snippets(1).text, 'HBS code for component A');
  assert.equal(usage.usageSection.snippets(2).text, '');
  assert.equal(usage.usageSection.snippets(3).text, 'SCSS code for component A');
});

test('it does not render the code snippets if the guide is set to not show code', function(assert) {
  assert.expect(1);
  this.set('emberFreestyle.showCode', false);

  this.set('emberFreestyle.snippets', codeSnippets);

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.numCodeSection, 0);
});

test('it does not render anything if slug does not match the focus', function(assert) {
  assert.expect(4);

  this.set('emberFreestyle.snippets', allSnippets);
  this.set('emberFreestyle.showCode', true);
  this.set('emberFreestyle.showNotes', true);
  this.set('emberFreestyle.showLabels', true);

  // set focus to a different component
  this.set('emberFreestyle.focus', 'someOtherComponent');

  this.render(hbs`
    {{#freestyle-usage 'componentA' title='Title A'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  assert.equal(usage.numTitles, 0);
  assert.equal(usage.numFocusButtons, 0);
  assert.equal(usage.numCodeSection, 0);
  assert.equal(usage.numNotesSection, 0);
});

test('it falls back to the defaultTheme for notes and code snippets if a highlightJsTheme argument is not provided', function(assert) {
  assert.expect(7);

  this.set('emberFreestyle.snippets', allSnippets);
  this.set('emberFreestyle.showCode', true);
  this.set('emberFreestyle.showNotes', true);

  this.set('emberFreestyle.defaultTheme', 'zenburn');

  this.render(hbs`
    {{#freestyle-usage 'componentA'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  let noteSnippets = usage.notesSection.snippets().toArray();
  let codeSnippets = usage.usageSection.snippets().toArray();
  noteSnippets.concat(codeSnippets).forEach((snippet) => {
    assert.ok(snippet.isZenburn);
  });

});

test('it uses the passed in highlightJsTheme', function(assert) {
  assert.expect(7);

  this.set('emberFreestyle.snippets', allSnippets);
  this.set('emberFreestyle.showCode', true);
  this.set('emberFreestyle.showNotes', true);

  this.set('emberFreestyle.defaultTheme', 'zenburn');

  this.render(hbs`
    {{#freestyle-usage 'componentA' highlightJsTheme='solarized-light'}}
      hello from component A
    {{/freestyle-usage}}
    `);

  let noteSnippets = usage.notesSection.snippets().toArray();
  let codeSnippets = usage.usageSection.snippets().toArray();
  noteSnippets.concat(codeSnippets).forEach((snippet) => {
    assert.ok(snippet.isSolarizedLight);
  });

});
