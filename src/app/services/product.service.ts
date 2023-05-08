import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

interface ProductResponse {
  id: number;
  name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly auth_token = localStorage.getItem('@userToken');
  constructor() {}

  private readonly http = inject(HttpClient);

  public create(data: { name?: string }): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(
      'http://localhost:3000/product',
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
}
