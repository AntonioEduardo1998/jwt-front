import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface UserResponse {
  access_token: string;
}

interface UserRequest {
  email?: string;
  password?: string;
}

interface UserSignupRequest {
  name?: string;
  email?: string;
  password?: string;
  status?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public readonly userIsLogged$ = new BehaviorSubject<boolean>(false);

  private readonly http = inject(HttpClient);

  private readonly router = inject(Router);

  public login(data: UserRequest): Observable<UserResponse> {
    return this.http
      .post<UserResponse>('http://localhost:3000/auth/login', {
        ...data,
      })
      .pipe(
        tap(() => {
          this.userIsLogged$.next(true);
          this.router.navigate(['/products']);
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('@userToken');
    this.userIsLogged$.next(false);
  }

  public signup(data: UserSignupRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/user', {
      ...data,
    });
  }

  public userIsLogged(): Observable<boolean> {
    const token = localStorage.getItem('@userToken');
    this.userIsLogged$.next(!!token);
    return this.userIsLogged$.asObservable();
  }
}
