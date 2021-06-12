import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private readonly http: HttpClient) {}

  public getProjectsByUserId(userId: string): Observable<Project[]> {
    return this.http.get<Project[]>(`api/projects?userId=${userId}`);
  }
}
