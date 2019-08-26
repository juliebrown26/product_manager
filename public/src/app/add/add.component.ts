import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newProduct: Product;

  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newProduct = {title: '', price: 0, image_url: ''};
  }
  addProduct(){
    console.log('adding a new product');
    let observable = this._productService.addProduct(this.newProduct);
    observable.subscribe((data: Product) => {
      this.newProduct = {title: '', price: 0, image_url: ''}
      this._router.navigate(['/products']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    }) 
  }
}
