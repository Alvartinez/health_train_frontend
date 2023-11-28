import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo6Component } from './modulo6.component';

describe('Modulo6Component', () => {
  let component: Modulo6Component;
  let fixture: ComponentFixture<Modulo6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo6Component]
    });
    fixture = TestBed.createComponent(Modulo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
