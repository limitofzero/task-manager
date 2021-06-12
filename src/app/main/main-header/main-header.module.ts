import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import { HeaderModule } from '../../ui/header/header.module';
import { TuiButtonModule, TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiComboBoxModule, TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProjectSelectorComponent } from './project-selector/project-selector.component';
import { AboutProjectDropdownModule } from './about-project-dropdown/about-project-dropdown.module';
import { CreateTaskBtnModule } from './create-task-btn/create-task-btn.module';

@NgModule({
  declarations: [MainHeaderComponent, ProjectSelectorComponent],
  exports: [MainHeaderComponent],
  imports: [
    CommonModule,
    HeaderModule,
    TuiButtonModule,
    TuiSelectModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiLetModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    AboutProjectDropdownModule,
    CreateTaskBtnModule,
  ],
})
export class MainHeaderModule {}
