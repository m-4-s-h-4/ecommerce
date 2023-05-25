import { Component, OnInit } from '@angular/core';
import data from './data.json';
import { Product } from '../../model/product.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})

export class ProductCatalogComponent implements OnInit {
  products: Product[] = data;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(product);
    console.log(this.cartService.getCartItems());
  }
}