import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginRequestDto} from '../dto/login-request.dto';
import {RegisterRequestDto} from '../dto/register-request.dto';
import {ForgetPasswordDto} from '../dto/forget-password.dto';
import {ResetPasswordDto} from '../dto/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  public signIn(form: LoginRequestDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('login', form);
  }

  public signUp(form: RegisterRequestDto): Observable<void> {
    return this.http.post<void>('register', form);
  }

  public confirmEmail(token: string): Observable<void> {
    return this.http.post<void>('confirm-user', { token });
  }

  public forgetPassword(form: ForgetPasswordDto): Observable<void> {
    return this.http.post<void>('forget-password', form);
  }

  public resetPassword(data: ResetPasswordDto): Observable<void> {
    return this.http.post<void>('reset-password', data);
  }
}
