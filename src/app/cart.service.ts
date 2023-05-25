import { Injectable } from '@angular/core';
import { Product } from './components/product-catalog/product-catalog.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  getCartItems(): Product[] {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
