import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultados1Component } from './resultados1.component';

describe('Resultados1Component', () => {
  let component: Resultados1Component;
  let fixture: ComponentFixture<Resultados1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resultados1Component]
    });
    fixture = TestBed.createComponent(Resultados1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
