import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionQuery } from './session.query';
import { map, switchMap } from 'rxjs/operators';
import { SessionStore } from './session.store';

@Injectable({
  providedIn: 'root',
})
export class AuthUserGuard implements CanActivate {
  constructor(
    private readonly session: SessionQuery,
    private readonly sessionStore: SessionStore,
    private readonly router: Router,
  ) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.session.isLoaded().pipe(
      map((isAuth) => (isAuth ? this.sessionStore.getValue()?.token : null)),
      switchMap((isAuth) => (isAuth ? of(true) : this.router.navigate(['auth']))),
    );
  }
}
