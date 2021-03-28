import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {UserTasksModule} from './tasks/user-tasks/user-tasks.module';
import { NavModule } from './nav/nav.module';
import {MainHeaderModule} from './main-header/main-header.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UserTasksModule,
    NavModule,
    MainHeaderModule,
  ],
  exports: [MainComponent]
})
export class MainModule {
}
