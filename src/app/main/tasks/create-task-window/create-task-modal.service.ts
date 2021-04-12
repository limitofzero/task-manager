import {Injectable, Injector} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {CreateTaskWindowComponent} from './create-task-window.component';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {CreateTask} from '../create-task';
import {TasksApiService} from '../tasks-api.service';
import {Task} from '../task.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskModalService {
  constructor(
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector,
    private readonly taskApi: TasksApiService,
  ) { }

  public open(userId: string): Observable<Task> {
    return this.createDialog(userId).pipe(
      switchMap((task: CreateTask) => task ? this.taskApi.create(task) : of(null))
    );
  }

  private createDialog(userId: string): Observable<any> {
    return this.dialogService.open(
      new PolymorpheusComponent(
        CreateTaskWindowComponent,
        this.injector
      ),
      {
        data: { userId },
        dismissible: true,
        label: 'Create task'
      },
    );
  }
}
