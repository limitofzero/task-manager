import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import {HeaderModule} from '../../ui/header/header.module';
import {TuiButtonModule, TuiDataListModule} from '@taiga-ui/core';
import {TuiComboBoxModule, TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiLetModule} from '@taiga-ui/cdk';
import { ProjectSelectorComponent } from './project-selector/project-selector.component';



@NgModule({
  declarations: [MainHeaderComponent, ProjectSelectorComponent],
  exports: [
    MainHeaderComponent
  ],
    imports: [
        CommonModule,
        HeaderModule,
        TuiButtonModule,
        TuiSelectModule,
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListModule,
        TuiLetModule,
        TuiDataListWrapperModule
    ]
})
export class MainHeaderModule { }
