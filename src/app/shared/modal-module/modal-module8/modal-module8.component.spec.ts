import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule8Component } from './modal-module8.component';

describe('ModalModule8Component', () => {
  let component: ModalModule8Component;
  let fixture: ComponentFixture<ModalModule8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule8Component]
    });
    fixture = TestBed.createComponent(ModalModule8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
