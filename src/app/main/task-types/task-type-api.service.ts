import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskTypeInterface } from './task-type.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskTypeApiService {
  constructor(private readonly http: HttpClient) {}

  public getTaskTypes(): Observable<TaskTypeInterface[]> {
    return this.http.get<TaskTypeInterface[]>('api/task-types');
  }
}
