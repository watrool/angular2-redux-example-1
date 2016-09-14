'use strict';

exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/
};

exports.istanbulInstrumenter = {
  test: /^(.(?!\.test))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
  query: {
    embedSource: true,
  },
  exclude: /node_modules/
};

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  exclude: /node_modules/,
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/
};

exports.css = {
  test: /\.css$/,
  loader: 'to-string!css!postcss',
  exclude: /node_modules/
};

// Needed this since webpack was choking on json files within node_modules
exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader (pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/
  };
}
