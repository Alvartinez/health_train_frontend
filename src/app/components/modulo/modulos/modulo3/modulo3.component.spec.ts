import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3Component } from './modulo3.component';

describe('Modulo3Component', () => {
  let component: Modulo3Component;
  let fixture: ComponentFixture<Modulo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modulo3Component]
    });
    fixture = TestBed.createComponent(Modulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
