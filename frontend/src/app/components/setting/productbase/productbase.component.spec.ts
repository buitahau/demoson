import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbaseComponent } from './productbase.component';

describe('ProductbaseComponent', () => {
  let component: ProductbaseComponent;
  let fixture: ComponentFixture<ProductbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
