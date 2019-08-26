import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _product: HttpClient) {}

  getProducts(){
     return this._product.get('/api/products');
   }
  findProduct(_id: string){
    return this._product.get(`/api/products/${_id}`);
  }
  addProduct(newProduct){
    return this._product.post('/api/products', newProduct);
  }
  updateProduct(product: Product){
    return this._product.put(`/api/products/${product._id}`, product);
  }
  removeProduct(product: Product){
    return this._product.delete(`/api/products/${product._id}`);
  }
}
