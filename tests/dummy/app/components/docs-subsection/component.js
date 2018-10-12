import FreestyleSubSection from 'ember-freestyle/components/freestyle-subsection';

let DocsSubSection = FreestyleSubSection.extend({});

DocsSubSection.reopenClass({
  positionalParams: ['templateName']
});

export default DocsSubSection;
