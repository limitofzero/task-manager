import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';

@NgModule({
  declarations: [TaskTableComponent],
  imports: [CommonModule, TuiTableModule, TuiTablePaginationModule],
  exports: [TaskTableComponent],
})
export class TaskTableModule {}
