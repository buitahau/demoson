import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorantComponent } from './colorant.component';

describe('ColorantComponent', () => {
  let component: ColorantComponent;
  let fixture: ComponentFixture<ColorantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
