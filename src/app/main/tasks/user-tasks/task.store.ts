import {Injectable} from '@angular/core';
import {Task} from '../task.interface';
import {guid, Store} from '@datorama/akita';

export interface TaskState {
  tasks: Task[];
}

@Injectable()
export class TaskStore extends Store<TaskState> {
  constructor() {
    super({ tasks: [] }, { name: `all-user-tasks-${guid()}` });
  }
}
