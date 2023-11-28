import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule3Component } from './modal-module3.component';

describe('ModalModule3Component', () => {
  let component: ModalModule3Component;
  let fixture: ComponentFixture<ModalModule3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule3Component]
    });
    fixture = TestBed.createComponent(ModalModule3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
