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

  public products(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(
      'http://localhost:3000/products',
      {
        headers: {
          Authorization: `Bearer ${this.auth_token}`,
        },
      }
    );
  }

  public buyProduct(data: any): Observable<ProductResponse[]> {

    const productId = data.productId;

    return this.http.post<ProductResponse[]>(
      `http://localhost:3000/product/buy/${productId}`,
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
