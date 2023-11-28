import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo7Component } from './modulo7.component';

describe('Modulo7Component', () => {
  let component: Modulo7Component;
  let fixture: ComponentFixture<Modulo7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo7Component]
    });
    fixture = TestBed.createComponent(Modulo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
