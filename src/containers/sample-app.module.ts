import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  DevToolsExtension,
  NgReduxModule,
  NgRedux
} from 'ng2-redux';
import {NgReduxRouter} from 'ng2-redux-router';
import {
  routing,
  appRoutingProviders
} from './sample-app.routes';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { RioSampleApp } from './sample-app';
import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';
import { RioTodoPage } from './todo-page';
import { RioLoginModule } from '../components/login/login.module';
import { RioUiModule } from '../components/ui/ui.module';
import { RioNavigatorModule } from '../components/navigator/navigator.module';
import { RioCounter } from '../components';
import { RioTodoSummary } from '../components';
import { RioTodoList } from '../components';
import { RioTodoItem } from '../components';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule,
    RioLoginModule,
    RioUiModule,
    RioNavigatorModule,
    NgReduxModule
  ],
  declarations: [
    RioSampleApp,
    RioAboutPage,
    RioCounterPage,
    RioCounter,
    RioTodoPage,
    RioTodoSummary,
    RioTodoList,
    RioTodoItem
  ],
  bootstrap: [
    RioSampleApp
  ],
  providers: [
    DevToolsExtension,
    FormBuilder,
    NgRedux,
    NgReduxRouter,
    appRoutingProviders
  ]
})
export class RioSampleAppModule { }
