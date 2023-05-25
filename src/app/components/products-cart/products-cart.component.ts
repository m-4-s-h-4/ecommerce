import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../components/product-catalog/product-catalog.component';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCartItems();
  }
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartItems();
  }
}
