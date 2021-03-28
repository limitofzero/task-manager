import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {HeaderModule} from '../ui/header/header.module';
import {TuiButtonModule} from '@taiga-ui/core';
import {UserTasksModule} from './tasks/user-tasks/user-tasks.module';
import { NavModule } from './nav/nav.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    TuiButtonModule,
    UserTasksModule,
    NavModule,
  ],
  exports: [MainComponent]
})
export class MainModule {
}
