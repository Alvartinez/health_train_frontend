import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule6Component } from './modal-module6.component';

describe('ModalModule6Component', () => {
  let component: ModalModule6Component;
  let fixture: ComponentFixture<ModalModule6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule6Component]
    });
    fixture = TestBed.createComponent(ModalModule6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
