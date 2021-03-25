import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TaskTableComponent
  ],
})
export class TaskTableModule { }
