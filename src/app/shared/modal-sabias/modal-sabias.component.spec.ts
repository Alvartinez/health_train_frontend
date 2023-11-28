import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSabiasComponent } from './modal-sabias.component';

describe('ModalSabiasComponent', () => {
  let component: ModalSabiasComponent;
  let fixture: ComponentFixture<ModalSabiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSabiasComponent]
    });
    fixture = TestBed.createComponent(ModalSabiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
