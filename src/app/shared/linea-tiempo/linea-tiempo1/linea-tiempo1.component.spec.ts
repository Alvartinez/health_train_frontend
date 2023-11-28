import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaTiempo1Component } from './linea-tiempo1.component';

describe('LineaTiempo1Component', () => {
  let component: LineaTiempo1Component;
  let fixture: ComponentFixture<LineaTiempo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaTiempo1Component]
    });
    fixture = TestBed.createComponent(LineaTiempo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
