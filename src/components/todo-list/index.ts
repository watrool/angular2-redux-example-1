import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { RioTodoItem } from '../todo-item';
@Component({
  selector: 'rio-todo-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div className="flex items-center">
      <ul class="list-reset">
        <li *ngFor="let todo of todos; trackBy:track">
         <rio-todo-item [todo]="todo"
          (todoCompleted)="todoCompleted.emit($event)"
          (todoDeleted)="todoDeleted.emit($event)"
          (todoEdited)="todoEdited.emit($event)"
         ></rio-todo-item>
        </li>
      </ul>
    </div>
  `
})
export class RioTodoList {
  @Input() todos: any;
  @Output() todoCompleted: EventEmitter<any> = new EventEmitter();
  @Output() todoEdited: EventEmitter<any> = new EventEmitter();
  @Output() todoDeleted: EventEmitter<any> = new EventEmitter();

  track(index, item) {
    return item.id;
  }

};
