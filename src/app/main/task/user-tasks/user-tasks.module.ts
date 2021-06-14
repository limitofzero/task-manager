import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { TaskTableModule } from '../task-table/task-table.module';

@NgModule({
  declarations: [UserTasksComponent],
  imports: [CommonModule, TaskTableModule],
  exports: [UserTasksComponent],
})
export class UserTasksModule {}
