import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias5Component } from './modal-sabias5.component';

describe('ModalSabias5Component', () => {
  let component: ModalSabias5Component;
  let fixture: ComponentFixture<ModalSabias5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias5Component]
    });
    fixture = TestBed.createComponent(ModalSabias5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
