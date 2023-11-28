import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias9Component } from './modal-sabias9.component';

describe('ModalSabias9Component', () => {
  let component: ModalSabias9Component;
  let fixture: ComponentFixture<ModalSabias9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias9Component]
    });
    fixture = TestBed.createComponent(ModalSabias9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
