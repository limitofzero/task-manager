import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CreateTaskModalService } from '../../task/create-task-window/create-task-modal.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, switchMap } from 'rxjs/operators';
import { TuiNotificationsService } from '@taiga-ui/core';
import { of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-create-task-btn',
  templateUrl: './create-task-btn.component.html',
  styleUrls: ['./create-task-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskBtnComponent {
  @Input() userId: string;

  constructor(
    private readonly createTaskService: CreateTaskModalService,
    private readonly notification: TuiNotificationsService,
  ) {}

  public createTask(): void {
    this.createTaskService
      .open(this.userId)
      .pipe(
        switchMap((result) =>
          result ? this.notification.show(`Task '${result.title}' was created`) : of(null),
        ),
        catchError((err) => this.notification.show(err.message)),
        untilDestroyed(this),
      )
      .subscribe();
  }
}
