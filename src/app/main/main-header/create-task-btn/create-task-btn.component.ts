import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CreateTaskModalService} from '../../tasks/create-task-window/create-task-modal.service';

@Component({
  selector: 'app-create-task-btn',
  templateUrl: './create-task-btn.component.html',
  styleUrls: ['./create-task-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskBtnComponent {

  constructor(private readonly createTaskService: CreateTaskModalService) {
  }

  public createTask(): void {
    this.createTaskService.open()
  }
}
