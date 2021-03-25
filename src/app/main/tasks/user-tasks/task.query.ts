import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {TaskState, TaskStore} from './task.store';
import {Observable} from 'rxjs';
import {Task} from '../task.interface';
import {map} from 'rxjs/operators';

@Injectable()
export class TaskQuery extends Query<TaskState> {
  constructor(protected store: TaskStore) {
    super(store);
  }

  selectTasks(): Observable<Task[]> {
    return this.select().pipe(
      map(state => state.tasks),
    );
  }
}
