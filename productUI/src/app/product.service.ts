import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Bean/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _url: string = "http://localhost:8081/product";


  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }

  getById(id) : Observable<Product> {
    return this.http.get<Product>(this._url + "/" + id);
  }

  editProduct(prod:Product, id):Observable<any> {
    return this.http.put(this._url + "/" + id, prod);
  }

  addProduct(prod:Object):Observable<any>{
    return this.http.post(this._url, prod);
  }

  deleteById(id:number):Observable<any> {
    return this.http.delete(this._url + "/" + id);
  }
}
