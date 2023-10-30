import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOutputComponent } from './product-output.component';

describe('ProductOutputComponent', () => {
  let component: ProductOutputComponent;
  let fixture: ComponentFixture<ProductOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOutputComponent]
    });
    fixture = TestBed.createComponent(ProductOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
