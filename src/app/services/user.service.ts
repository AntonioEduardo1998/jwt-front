import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private readonly http = inject(HttpClient);

  public login(data: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/auth/login', {
      ...data,
    });
  }

  public signup(data: UserSignupRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/user', {
      ...data,
    });
  }
}
