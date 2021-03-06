import { Injectable, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { CreateTaskWindowComponent } from './create-task-window.component';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CreateTask } from '../create-task.interface';
import { Task } from '../task.interface';
import { TaskFacadeService } from '../user-tasks/task-facade.service';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskModalService {
  constructor(
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector,
    private readonly taskService: TaskFacadeService,
  ) {}

  public open(userId: string): Observable<Task> {
    return this.createDialog(userId).pipe(
      switchMap((task: CreateTask) => (task ? this.taskService.add(task) : of(null))),
    );
  }

  private createDialog(userId: string): Observable<any> {
    const polymorph = new PolymorpheusComponent(CreateTaskWindowComponent, this.injector);

    return this.dialogService.open(
      polymorph,
      {
        data: { userId },
        dismissible: true,
        label: 'Create task',
      },
    );
  }
}
