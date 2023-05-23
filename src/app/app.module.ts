import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { ProductCatalogItemComponent } from './components/product-catalog-item/product-catalog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsCartComponent,
    ProductCatalogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
