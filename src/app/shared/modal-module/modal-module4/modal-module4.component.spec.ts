import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule4Component } from './modal-module4.component';

describe('ModalModule4Component', () => {
  let component: ModalModule4Component;
  let fixture: ComponentFixture<ModalModule4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule4Component]
    });
    fixture = TestBed.createComponent(ModalModule4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
