'use strict';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/proxy';

const testContext = (<{ context?: Function }>require).context(
  './',
  true,
  /\.test\.ts/);
testContext.keys().forEach(testContext);
