import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'rio-input',
  template: `
    <input
      [id]="qaid"
      [type]="inputType"
      class="block col-12 mb1 input"
      [attr.placeholder]="placeholder"
      [NgControl]="formControl"
    />
  `
})
export class RioInput {
  @Input() inputType = 'text';
  @Input() placeholder = '';
  @Input() formControl: NgControl;
  @Input() qaid: string;
};
