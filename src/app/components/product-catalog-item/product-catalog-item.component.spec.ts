import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogItemComponent } from './product-catalog-item.component';

describe('ProductCatalogItemComponent', () => {
  let component: ProductCatalogItemComponent;
  let fixture: ComponentFixture<ProductCatalogItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatalogItemComponent]
    });
    fixture = TestBed.createComponent(ProductCatalogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
