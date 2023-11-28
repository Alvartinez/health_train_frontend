import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo9Component } from './modulo9.component';

describe('Modulo9Component', () => {
  let component: Modulo9Component;
  let fixture: ComponentFixture<Modulo9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo9Component]
    });
    fixture = TestBed.createComponent(Modulo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
