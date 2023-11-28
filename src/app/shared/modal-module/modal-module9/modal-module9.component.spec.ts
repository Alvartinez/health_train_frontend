import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule9Component } from './modal-module9.component';

describe('ModalModule9Component', () => {
  let component: ModalModule9Component;
  let fixture: ComponentFixture<ModalModule9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModule9Component]
    });
    fixture = TestBed.createComponent(ModalModule9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
