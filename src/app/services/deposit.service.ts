import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

interface DepositResponse {
  id: number;
  name?: string;
  branch?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  private readonly auth_token = localStorage.getItem('@userToken');
  constructor() {}

  private readonly http = inject(HttpClient);

  public create(data: {
    name?: string;
    branch?: string;
  }): Observable<DepositResponse> {
    return this.http.post<DepositResponse>(
      'http://localhost:3000/deposit',
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${this.auth_token}`,
        },
      }
    );
  }

  public deposits(): Observable<DepositResponse[]> {
    return this.http.get<DepositResponse[]>(
      'http://localhost:3000/deposits',
      {
        headers: {
          Authorization: `Bearer ${this.auth_token}`,
        },
      }
    );
  }
}
