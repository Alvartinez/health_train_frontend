import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo4Component } from './modulo4.component';

describe('Modulo4Component', () => {
  let component: Modulo4Component;
  let fixture: ComponentFixture<Modulo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo4Component]
    });
    fixture = TestBed.createComponent(Modulo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
