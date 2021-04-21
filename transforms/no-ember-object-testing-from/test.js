'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'no-ember-object-testing-from',
});