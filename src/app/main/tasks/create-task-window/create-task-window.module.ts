import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskWindowComponent } from './create-task-window.component';
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule, TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';

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
    TuiLetModule,
    TuiButtonModule,
    TuiHintModule,
  ],
  exports: [CreateTaskWindowComponent],
})
export class CreateTaskWindowModule {}
