import { Component, OnInit } from '@angular/core';
import data from './data.json';
import { CartService } from '../../cart.service';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

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
    console.log('Product added to cart:', product);
    console.log('Cart:', this.cartService.getCartItems());
  }
}