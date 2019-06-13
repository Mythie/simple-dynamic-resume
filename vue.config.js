/* eslint-disable */
const sass = require('node-sass');
const config = require('./config');

const sassUtils = require('node-sass-utils')(sass);

module.exports = {
  lintOnSave: false,
  publicPath: './'
};
