import {Routes, RouterModule} from '@angular/router';

import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';
import { RioTodoPage } from './todo-page';

export const SAMPLE_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'counter'
}, {
  path: 'counter',
  component: RioCounterPage
}, {
  path: 'about',
  component: RioAboutPage
}, {
  path: 'todo',
  component: RioTodoPage
}];

const appRoutes: Routes = SAMPLE_APP_ROUTES;

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
