import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {CreateTaskModalService} from '../../tasks/create-task-window/create-task-modal.service';

@Component({
  selector: 'app-create-task-btn',
  templateUrl: './create-task-btn.component.html',
  styleUrls: ['./create-task-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskBtnComponent {
  @Input() userId: string;

  constructor(private readonly createTaskService: CreateTaskModalService) {
  }

  public createTask(): void {
    this.createTaskService.open(this.userId);
  }
}
