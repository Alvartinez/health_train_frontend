import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule10Component } from './modal-module10.component';

describe('ModalModule10Component', () => {
  let component: ModalModule10Component;
  let fixture: ComponentFixture<ModalModule10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule10Component]
    });
    fixture = TestBed.createComponent(ModalModule10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
