import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../task.interface';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTableComponent implements OnInit {
  public readonly columns = ['id', 'title'];

  @Input() tasks: Task[] = [];
  @Input() page = 0;
  @Input() size = 0;
  @Input() total = 0;

  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  public ngOnInit(): void {

  }
}
