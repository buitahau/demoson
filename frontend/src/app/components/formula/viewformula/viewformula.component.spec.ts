import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformulaComponent } from './viewformula.component';

describe('ViewformulaComponent', () => {
  let component: ViewformulaComponent;
  let fixture: ComponentFixture<ViewformulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewformulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewformulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
