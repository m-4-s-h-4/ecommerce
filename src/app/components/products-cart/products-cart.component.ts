import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../model/product.model';

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
  @Input()
  cart: Product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCartItems();
  }

  calculateTotal() {
    return this.cart.reduce((acc, item) => acc + item.price, 0)
  }
}
