import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskType } from './task-type';

@Injectable({
  providedIn: 'root',
})
export class TaskTypeApiService {
  constructor(private readonly http: HttpClient) {}

  public getTaskTypes(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>('api/task-types');
  }
}
