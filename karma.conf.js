'use strict';

const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

module.exports = function (config) {
  config.set({
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'source-map-support'
    ],

    plugins: [
      "karma-chai",
      "karma-chrome-launcher",
      "karma-coverage",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-sinon",
      "karma-source-map-support",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],
    files: ['./src/tests.entry.ts'],

    preprocessors: {
      './src/**/*.ts': [
        'webpack',
        'sourcemap'
      ],
      './src/**/!(*.test|tests.*).ts': [
        'coverage'
      ],
    },

    webpack: {
      entry: './src/tests.entry.ts',
      devtool: 'source-map',
      verbose: true,
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
        loaders: combinedLoaders(),
        postLoaders: [
          loaders.istanbulInstrumenter
        ]
      },
      stats: { colors: true, reasons: true },
      debug: true
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    reporters: ['mocha', 'coverage'],
    // only output json report to be remapped by remap-istanbul
    coverageReporter: {
      reporters: [
        { type: 'json' }
      ],
      dir: './coverage/',
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0]; // returns 'chrome'
      }
    },

    port: 9999,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
    singleRun: true
  });
};

function combinedLoaders() {
  return Object.keys(loaders).reduce(function reduce(aggregate, k) {
    switch (k) {
    case 'istanbulInstrumenter':
    case 'tslint':
      return aggregate;
    case 'ts':
      return aggregate.concat([ // force inline source maps
        Object.assign(loaders[k],
          { query: { babelOptions: { sourceMaps: 'both' } } })]);
    default:
      return aggregate.concat([loaders[k]]);
    }
  },
  []);
}
