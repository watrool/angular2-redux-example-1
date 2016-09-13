import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  DevToolsExtension,
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
import {RioSampleApp} from './sample-app';
import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';
import { RioTodoPage } from './todo-page';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule
  ],
  declarations: [
    RioSampleApp,
    RioAboutPage,
    RioCounterPage
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
