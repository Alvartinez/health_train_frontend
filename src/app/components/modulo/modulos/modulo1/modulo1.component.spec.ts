import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Component } from './modulo1.component';

describe('Modulo1Component', () => {
  let component: Modulo1Component;
  let fixture: ComponentFixture<Modulo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo1Component]
    });
    fixture = TestBed.createComponent(Modulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
