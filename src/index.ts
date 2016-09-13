
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RioSampleAppModule } from './containers/sample-app.module';

declare let __PRODUCTION__: any;
declare let __TEST__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  // Compile and launch the module
  platformBrowserDynamic().bootstrapModule(RioSampleAppModule);
}
