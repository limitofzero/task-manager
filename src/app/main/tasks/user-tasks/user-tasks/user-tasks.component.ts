import {Component, Input, OnInit} from '@angular/core';
import {TasksApiService} from '../../tasks-api.service';
import {TaskStore} from '../task.store';
import {TaskQuery} from '../task.query';
import {Task} from '../../task.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {doWithLoading} from '../../../../common/custom-operators/do-with-loading';

@UntilDestroy()
@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss'],
  providers: [TaskStore, TaskQuery],
})
export class UserTasksComponent implements OnInit {
  private readonly performerId = new BehaviorSubject(null);

  public readonly tasks: Observable<Task[]> = this.taskQuery.selectTasks();
  public readonly isLoading: Observable<boolean> = this.taskQuery.selectLoading();

  @Input('userId') set userId(value: string) {
    this.performerId.next(value);
  }


  constructor(
    private readonly taskApi: TasksApiService,
    private readonly taskQuery: TaskQuery,
    private readonly taskStore: TaskStore,
  ) {}

  ngOnInit(): void {
    this.performerId.pipe(
      filter(user => !!user),
      switchMap(userId => doWithLoading(this.taskApi.getTasksByUser(userId), this.taskStore)),
      untilDestroyed(this),
    ).subscribe({
      next: tasks => {
        this.taskStore.update({ tasks });
      },
    });
  }
}
