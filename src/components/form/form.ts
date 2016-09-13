import { Component } from '@angular/core';

@Component({
  selector: 'rio-form',
  template: `
    <form>
      <ng-content></ng-content>
    </form>
  `
})
export class RioForm {};
