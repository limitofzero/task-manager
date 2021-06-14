import { Injectable } from '@angular/core';
import { TaskTypeApiService } from './task-type-api.service';
import { TaskTypeStore } from './task-type.store';
import { TaskTypeQuery } from './task-type.query';
import { Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { TaskTypeInterface } from './task-type.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskTypeFacadeService {
  constructor(
    private readonly api: TaskTypeApiService,
    private readonly state: TaskTypeStore,
    private readonly query: TaskTypeQuery,
  ) {}

  public getTaskTypes(): Observable<TaskTypeInterface[]> {
    const request = this.api.getTaskTypes().pipe(
      tap(() => this.state.setLoading(true)),
      tap((projects) => this.state.set(projects)),
      finalize(() => this.state.setLoading(false)),
    );

    return this.query
      .selectHasCache()
      .pipe(switchMap((hasCache) => (hasCache ? this.query.selectAll() : request)));
  }

  public isLoading(): Observable<boolean> {
    return this.query.selectLoading();
  }
}
