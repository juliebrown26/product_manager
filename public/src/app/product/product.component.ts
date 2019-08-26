import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
  
  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    console.log('showing products');
    let observable = this._productService.getProducts();
    observable.subscribe((data: Product[]) => {
      this.products = data;
    })  
  }
  removeProduct(product: Product, index: number){
    let observable = this._productService.removeProduct(product);
    observable.subscribe((data: Product) => {
      console.log('removing author');
      this.products.splice(index, 1);
    })
  }
}
