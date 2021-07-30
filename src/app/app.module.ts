import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { SessionModule } from './session/session.module';
import {
  iconsPathFactory,
  TUI_ICONS_PATH,
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { persistState } from '@datorama/akita';
import { CreateTaskWindowModule } from './main/task/create-task-window/create-task-window.module';

export const sessionStorage = persistState({
  include: ['session'],
  key: 'token',
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    TuiNotificationsModule,
    MainModule,
    SessionModule,
    TuiDialogModule,
    CreateTaskWindowModule,
    // todo move
  ],
  providers: [
    {
      provide: 'sessionStorage',
      useValue: sessionStorage,
    },
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Field is required',
        email: 'This field is not containing email',
      },
    },
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
