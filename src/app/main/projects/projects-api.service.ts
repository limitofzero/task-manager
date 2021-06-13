import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInterface } from './project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private readonly http: HttpClient) {}

  public getProjectsByUserId(userId: string): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(`api/projects?userId=${userId}`);
  }
}
