import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabias2Component } from './modal-sabias2.component';

describe('ModalSabias2Component', () => {
  let component: ModalSabias2Component;
  let fixture: ComponentFixture<ModalSabias2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabias2Component]
    });
    fixture = TestBed.createComponent(ModalSabias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
