import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule5Component } from './modal-module5.component';

describe('ModalModule5Component', () => {
  let component: ModalModule5Component;
  let fixture: ComponentFixture<ModalModule5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule5Component]
    });
    fixture = TestBed.createComponent(ModalModule5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
