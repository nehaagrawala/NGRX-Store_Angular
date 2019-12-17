import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PRODUCTS } from "./../store/market";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../store/product.model';
import * as Cart from "./../store/action";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private store: Store<any>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      let id = p['id']
      let result = Array.prototype.filter.call(PRODUCTS, (v) => v.id == id)
      if (result.length > 0) {
        this.product = result[0]
      }
    })
  }
  addToCart(product) {
    this.store.dispatch(new Cart.AddProduct(product));
  }
}
