import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'rio-counter',
  template: `
    <div class="flex">
      <rio-button
        className="bg-black col-2"
        (onClick)="decrement()"
        testid="counter-decrementButton">
        -
      </rio-button>

      <div
        data-testid="counter-result"
        class="flex-auto flex-center center h1">
        {{ counter }}
      </div>

      <rio-button className="col-2"
        (onClick)="increment()"
        testid="counter-incrementButton">
        +
      </rio-button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RioCounter {
  @Input() counter: number;
  @Input() increment: () => void;
  @Input() decrement: () => void;
};
