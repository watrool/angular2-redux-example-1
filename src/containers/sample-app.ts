import {
  Component,
  ViewEncapsulation,
  ApplicationRef
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import * as SessionActions from '../actions/session';
import { loginUser, logoutUser } from '../actions/session';


import { is } from 'immutable';
import {
  RioButton,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
  RioLoginModal
} from '../components';

import {AppState} from './app-state';
import {DevToolsExtension, NgRedux, select} from 'ng2-redux';
import configureStore from '../store/configure-store';
const store = configureStore({});

@Component({
  selector: 'rio-sample-app',
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <rio-login-modal
        (onSubmit)="login($event)"
        [hasError]="session.get('hasError', false)"
        [isPending]="session.get('isLoading', false)"
        *ngIf="!isLoggedIn"></rio-login-modal>
      <rio-navigator>
        <rio-navigator-item [mr]=true>
          <rio-logo></rio-logo>
        </rio-navigator-item>
        <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          <a [routerLink]="['Counter']"
            class="text-decoration-none">Counter</a>
        </rio-navigator-item>
      <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          <a [routerLink]="['Todo']"
            class="text-decoration-none">Todo</a>
        </rio-navigator-item>
        <rio-navigator-item *ngIf="isLoggedIn">
          <a [routerLink]="['About']"
            class="text-decoration-none">About Us</a>
        </rio-navigator-item>
        <div class="flex flex-auto"></div>
        <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          {{
            session.getIn(['user', 'firstName'], '') + ' ' +
            session.getIn(['user', 'lastName'], '') }}
        </rio-navigator-item>
        <rio-navigator-item [hidden]="!isLoggedIn">
          <rio-button className="bg-red white" (click)="logout()" >
            Logout
          </rio-button>
        </rio-navigator-item>
      </rio-navigator>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})

export class RioSampleApp {
    private disconnect: Function;
    private unsubscribe: Function;
    private isLoggedIn: Boolean;
    private session: any;
    private selector: Subscription;

    login(credentials) {
      loginUser(credentials)(this.ngRedux.dispatch);
    };

    logout() {
      this.ngRedux.dispatch(logoutUser());
    };
    constructor(
      private ngRedux: NgRedux<AppState>,
      private applicationRef: ApplicationRef) {
    }

    ngOnInit() {
      this.ngRedux.provideStore(store);
      this.selector = this.ngRedux
        .select(state => state.session, is)
        .subscribe(n => {
          this.session = n;
          this.isLoggedIn = n.get('token', false);
        });

      // this.ngRedux.mapDispatchToTarget(
      //   this.mapDispatchToThis(this.ngRedux.dispatch))(this);

    }

    ngOnDestroy() {
      this.selector.unsubscribe();
    }
    // mapDispatchToThis(dispatch) {
    //   return {
    //     login: function (credentials) {
    //       loginUser(credentials)(dispatch);
    //     } ,
    //     logout: () => dispatch(logoutUser())
    //   };
    // }
};
