import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';
import {TuiTableModule} from '@taiga-ui/addon-table';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [
    CommonModule,
    TuiTableModule,
  ],
  exports: [
    TaskTableComponent,
  ],
})
export class TaskTableModule { }
