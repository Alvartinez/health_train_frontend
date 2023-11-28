import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias10Component } from './modal-sabias10.component';

describe('ModalSabias10Component', () => {
  let component: ModalSabias10Component;
  let fixture: ComponentFixture<ModalSabias10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias10Component]
    });
    fixture = TestBed.createComponent(ModalSabias10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
