import {Component, Input} from '@angular/core';
import {Task} from '../../task.interface';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent {
  @Input() tasks: Task[] = [];
}
