import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements AfterViewChecked {
  product: Product;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngAfterViewChecked() {
    this._route.paramMap.subscribe((params: Params) => {
      const id = params.params['id'];
        this._productService.findProduct(id).subscribe((product: Product) => {
          this.product = product;
        })
    })
  }
  editProduct(product: Product){
    let observable = this._productService.updateProduct(product);
    observable.subscribe((data: Product) => {
      console.log('updating product');
    })
    this._router.navigate(['/products']);
  }
}
