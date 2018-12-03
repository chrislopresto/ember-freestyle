import { merge } from '@ember/polyfills';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import usage from '../../../pages/usage-component';

// Stub freestyle service
const FreestyleStub = Service.extend({
  highlight: function() {},
  ensureHljsTheme: function() {}
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

let allSnippets = merge(notesSnippets, codeSnippets);

module('Integration | Component | freestyle usage', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:emberFreestyle', FreestyleStub);
    this.emberFreestyle = this.owner.lookup('service:emberFreestyle');
    usage.setContext(this);
  });

  hooks.afterEach(function() {
    usage.removeContext();
  });

  test('it renders the title and the focus button if a title is passed in and the guide is set to show labels', async function(assert) {
    assert.expect(3);

    this.set('emberFreestyle.showLabels', true);

    await render(hbs`
      {{#freestyle-usage 'componentA' title='Title A'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.numTitles, 1);
    assert.equal(usage.numFocusButtons, 1);
    assert.equal(usage.title, 'Title A');
  });

  test('it does not render the title if the guide is set to not show labels', async function(assert) {
    assert.expect(2);

    this.set('emberFreestyle.showLabels', false);

    await render(hbs`
      {{#freestyle-usage 'componentA' title='Title A'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.numTitles, 0);
    assert.equal(usage.numFocusButtons, 0);
  });

  test('it renders the passed in block', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.content, 'hello from component A');
  });

  test('it renders the notes snippets', async function(assert) {
    assert.expect(4);
    this.set('emberFreestyle.showNotes', true);

    this.set('emberFreestyle.snippets', notesSnippets);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.notesSection.snippets.length, 3);
    assert.equal(usage.notesSection.snippets.objectAt(0).text, 'JS notes for component A');
    assert.equal(usage.notesSection.snippets.objectAt(1).text, 'HBS notes for component A');
    assert.equal(usage.notesSection.snippets.objectAt(2).text, 'SCSS notes for component A');
  });

  test('it renders only the notes snippets that have content', async function(assert) {
    assert.expect(4);
    this.set('emberFreestyle.showNotes', true);

    let incompleteNotesSnippets = {
      'componentA--notes.js': 'JS notes for component A',
      // no content for 'componentA--notes.hbs'
      'componentA--notes.scss': 'SCSS notes for component A'
    };
    this.set('emberFreestyle.snippets', incompleteNotesSnippets);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.notesSection.snippets.length, 3);
    assert.equal(usage.notesSection.snippets.objectAt(0).text, 'JS notes for component A');
    assert.equal(usage.notesSection.snippets.objectAt(1).text, '');
    assert.equal(usage.notesSection.snippets.objectAt(2).text, 'SCSS notes for component A');
  });

  test('it does not render the notes snippets if the guide is set to not show notes', async function(assert) {
    assert.expect(1);
    this.set('emberFreestyle.showNotes', false);

    this.set('emberFreestyle.snippets', notesSnippets);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.numNotesSection, 0);
  });

  test('it renders the code snippets', async function(assert) {
    assert.expect(5);
    this.set('emberFreestyle.showCode', true);

    this.set('emberFreestyle.snippets', codeSnippets);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.usageSection.snippets.length, 4);
    assert.equal(usage.usageSection.snippets.objectAt(0).text, 'HBS USAGE for component A');
    assert.equal(usage.usageSection.snippets.objectAt(1).text, 'HBS code for component A');
    assert.equal(usage.usageSection.snippets.objectAt(2).text, 'JS CODE for component A');
    assert.equal(usage.usageSection.snippets.objectAt(3).text, 'SCSS code for component A');
  });

  test('it ignores blank lines when unindenting', async function(assert) {
    assert.expect(1);
    this.set('emberFreestyle.showCode', true);

    this.set('emberFreestyle.snippets',  {
      'componentA--usage.hbs': [
        '        {{indented-far-before-blank-line}}',
        '',
        '        {{after-blank-line}}'
      ].join('\n'),
    });

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);
    let rawSnippet = usage.usageSection.snippets.objectAt(0).rawText;

    assert.equal(rawSnippet.trim().split('\n').get('lastObject'), '{{after-blank-line}}');
  });

  test('it renders only the code snippets that have content', async function(assert) {
    assert.expect(5);
    this.set('emberFreestyle.showCode', true);

    let incompleteCodeSnippets = {
      'componentA--usage.hbs': 'HBS USAGE for component A',
      'componentA.hbs': 'HBS code for component A',
      // no content for 'componentA.js'
      'componentA.scss': 'SCSS code for component A'
    };
    this.set('emberFreestyle.snippets', incompleteCodeSnippets);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.usageSection.snippets.length, 4);
    assert.equal(usage.usageSection.snippets.objectAt(0).text, 'HBS USAGE for component A');
    assert.equal(usage.usageSection.snippets.objectAt(1).text, 'HBS code for component A');
    assert.equal(usage.usageSection.snippets.objectAt(2).text, '');
    assert.equal(usage.usageSection.snippets.objectAt(3).text, 'SCSS code for component A');
  });

  test('it does not render the code snippets if the guide is set to not show code', async function(assert) {
    assert.expect(1);
    this.set('emberFreestyle.showCode', false);

    this.set('emberFreestyle.snippets', codeSnippets);

    await render(hbs`
      {{#freestyle-usage 'componentA'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.numCodeSection, 0);
  });

  test('it does not render anything if slug does not match the focus', async function(assert) {
    assert.expect(4);

    this.set('emberFreestyle.snippets', allSnippets);
    this.set('emberFreestyle.showCode', true);
    this.set('emberFreestyle.showNotes', true);
    this.set('emberFreestyle.showLabels', true);

    // set focus to a different component
    this.set('emberFreestyle.focus', 'someOtherComponent');

    await render(hbs`
      {{#freestyle-usage 'componentA' title='Title A'}}
        hello from component A
      {{/freestyle-usage}}
      `);

    assert.equal(usage.numTitles, 0);
    assert.equal(usage.numFocusButtons, 0);
    assert.equal(usage.numCodeSection, 0);
    assert.equal(usage.numNotesSection, 0);
  });
});
