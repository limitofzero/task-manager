import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.interface';
import { Observable } from 'rxjs';
import { CreateTaskInterface } from './create-task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  constructor(private readonly http: HttpClient) {}

  public getTasks(params: { performerId?: string }): Observable<Task[]> {
    return this.http.get<Task[]>(`api/tasks`, { params });
  }

  public create(task: CreateTaskInterface): Observable<Task> {
    return this.http.post<Task>('api/tasks', task);
  }
}
