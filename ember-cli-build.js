/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
     // Add options here
  });

  var extraAssets = new Funnel(app.bowerDirectory + '/sinon', {
    srcDir: '/',
    files: ['index.js'],
    destDir: '/assets/sinon'
  });

  return app.toTree(extraAssets);
};
