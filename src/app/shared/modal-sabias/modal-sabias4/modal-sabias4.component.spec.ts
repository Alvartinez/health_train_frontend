import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias4Component } from './modal-sabias4.component';

describe('ModalSabias4Component', () => {
  let component: ModalSabias4Component;
  let fixture: ComponentFixture<ModalSabias4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias4Component]
    });
    fixture = TestBed.createComponent(ModalSabias4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
