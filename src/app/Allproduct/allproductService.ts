import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
  readonly productCard=signal(0);
  productCardreadstate=this.productCard.asReadonly();

  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://fakestoreapi.com/products';
  addProduct(){
    this.productCard.update(value => value+1);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
