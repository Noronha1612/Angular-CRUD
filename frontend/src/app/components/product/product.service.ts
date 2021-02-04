import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + '/products', product)
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/products');
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, {
      name: product.name,
      price: product.price
    });
  }

  delete(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/products/${product.id}`);
  }
}
