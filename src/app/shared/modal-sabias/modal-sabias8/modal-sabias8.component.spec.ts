import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias8Component } from './modal-sabias8.component';

describe('ModalSabias8Component', () => {
  let component: ModalSabias8Component;
  let fixture: ComponentFixture<ModalSabias8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias8Component]
    });
    fixture = TestBed.createComponent(ModalSabias8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
