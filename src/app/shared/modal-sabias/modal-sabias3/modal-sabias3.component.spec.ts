import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias3Component } from './modal-sabias3.component';

describe('ModalSabias3Component', () => {
  let component: ModalSabias3Component;
  let fixture: ComponentFixture<ModalSabias3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias3Component]
    });
    fixture = TestBed.createComponent(ModalSabias3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
