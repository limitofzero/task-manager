import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task.interface';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTableComponent {
  public readonly columns = ['id', 'title'];

  @Input() tasks: Task[] = [];
  @Input() page = 0;
  @Input() size = 0;
  @Input() total = 0;

  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();
}
