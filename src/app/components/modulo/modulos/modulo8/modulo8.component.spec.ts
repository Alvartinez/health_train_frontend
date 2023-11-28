import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo8Component } from './modulo8.component';

describe('Modulo8Component', () => {
  let component: Modulo8Component;
  let fixture: ComponentFixture<Modulo8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo8Component]
    });
    fixture = TestBed.createComponent(Modulo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
