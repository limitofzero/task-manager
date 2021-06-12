import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginRequest } from './login.interface';
import { RegisterRequest } from './register.interface';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public signIn(form: LoginRequest): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('api/login', form);
  }

  public signUp(form: RegisterRequest): Observable<void> {
    return this.http.post<void>('api/register', form);
  }

  // todo
  public confirmEmail(token: string): Observable<void> {
    return of(null);
  }

  // todo
  public forgetPassword(form: any): Observable<void> {
    return of(null);
  }

  // todo
  public resetPassword(data: any): Observable<void> {
    return of(null);
  }
}
