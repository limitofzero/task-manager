import { Injectable } from '@angular/core';
import { TasksApiService } from '../tasks-api.service';
import { TaskStore } from './task.store';
import { TaskQuery } from './task.query';
import { Observable, Subject } from 'rxjs';
import { mapTo, startWith, switchMapTo, tap } from 'rxjs/operators';
import { setLoading } from '@datorama/akita';
import { CreateTaskInterface } from '../create-task.interface';
import { Task } from '../task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskFacadeService {
  private readonly reupdate = new Subject<void>();

  constructor(private readonly api: TasksApiService, private readonly store: TaskStore, private readonly query: TaskQuery) {}

  public load(params: { performerId?: string } = {}): Observable<void> {
    return this.reupdate.pipe(
      startWith(null),
      switchMapTo(this.api.getTasks(params)),
      setLoading(this.store),
      tap((result) => this.store.set(result)),
      mapTo(null),
    );
  }

  public add(task: CreateTaskInterface): Observable<Task> {
    return this.api.create(task).pipe(tap(() => this.reupdate.next()));
  }

  public selectAll(): Observable<Task[]> {
    return this.query.selectAll();
  }

  public isLoading(): Observable<boolean> {
    return this.query.selectLoading();
  }
}
