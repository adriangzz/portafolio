const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
// next.config.js
const withImages = require('next-images');
module.exports = withSass(
  withImages(
    withCss({
      target: 'serverless'
    })
  )
);
