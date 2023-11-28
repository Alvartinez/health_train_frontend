import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsModule1Component } from './cards-module1.component';

describe('CardsModule1Component', () => {
  let component: CardsModule1Component;
  let fixture: ComponentFixture<CardsModule1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsModule1Component]
    });
    fixture = TestBed.createComponent(CardsModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
