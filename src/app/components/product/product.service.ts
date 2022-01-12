import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://61d22c8fda87830017e5941b.mockapi.io/api/v1/products';

  constructor(
    private snackBar: MatSnackBar ,
    private http: HttpClient
  ) { }

  showMessage( msg: string, isError: boolean = false ):void
  {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create( product: Product): Observable<Product> {
    return this.http.post<Product>( this.baseUrl, product ).pipe(
      map( obj => obj),
      catchError(
        e => this.errorHandle(e)
      )
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>( this.baseUrl ).pipe(
      map( obj => obj),
      catchError(
        e => this.errorHandle(e)
      )
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>( url ).pipe(
      map( obj => obj),
      catchError(
        e => this.errorHandle(e)
      )
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>( url, product ).pipe(
      map( obj => obj),
      catchError(
        e => this.errorHandle(e)
      )
    );
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>( url ).pipe(
      map( obj => obj),
      catchError(
        e => this.errorHandle(e)
      )
    );
  }


  errorHandle( e: any ): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
