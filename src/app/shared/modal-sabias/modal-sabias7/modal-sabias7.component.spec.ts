import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias7Component } from './modal-sabias7.component';

describe('ModalSabias7Component', () => {
  let component: ModalSabias7Component;
  let fixture: ComponentFixture<ModalSabias7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias7Component]
    });
    fixture = TestBed.createComponent(ModalSabias7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
