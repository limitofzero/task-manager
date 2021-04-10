import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskWindowComponent } from './create-task-window.component';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';



@NgModule({
  declarations: [CreateTaskWindowComponent],
  imports: [
    CommonModule,
    TuiSelectModule,
    ReactiveFormsModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiInputModule,
    TuiTextAreaModule,
  ],
  exports: [CreateTaskWindowComponent],
})
export class CreateTaskWindowModule { }
