import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule2Component } from './modal-module2.component';

describe('ModalModule2Component', () => {
  let component: ModalModule2Component;
  let fixture: ComponentFixture<ModalModule2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule2Component]
    });
    fixture = TestBed.createComponent(ModalModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
