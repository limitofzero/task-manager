import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../session/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(
    private readonly http: HttpClient,
  ) { }

  public getUsersByProjectId(projectId: string): Observable<User[]> {
    return this.http.get<User[]>(`api/users/?projectId=${projectId}`);
  }
}
