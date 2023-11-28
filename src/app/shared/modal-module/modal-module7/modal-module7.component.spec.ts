import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule7Component } from './modal-module7.component';

describe('ModalModule7Component', () => {
  let component: ModalModule7Component;
  let fixture: ComponentFixture<ModalModule7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule7Component]
    });
    fixture = TestBed.createComponent(ModalModule7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
