import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias6Component } from './modal-sabias6.component';

describe('ModalSabias6Component', () => {
  let component: ModalSabias6Component;
  let fixture: ComponentFixture<ModalSabias6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias6Component]
    });
    fixture = TestBed.createComponent(ModalSabias6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
