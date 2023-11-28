import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo10Component } from './modulo10.component';

describe('Modulo10Component', () => {
  let component: Modulo10Component;
  let fixture: ComponentFixture<Modulo10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo10Component]
    });
    fixture = TestBed.createComponent(Modulo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
