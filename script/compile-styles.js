'use strict';

const fs = require('fs');
const path = require('path');
const sass = require('sass');

const inputFile = path.join(__dirname, '../app/styles/ember-freestyle.scss');
const outputFile = path.join(__dirname, '../vendor/ember-freestyle.css');

const { css } = sass.renderSync({
  file: inputFile,
});

fs.writeFileSync(outputFile, css);
