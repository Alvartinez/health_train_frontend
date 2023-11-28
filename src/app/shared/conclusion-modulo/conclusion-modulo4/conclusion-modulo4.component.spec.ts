import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo4Component } from './conclusion-modulo4.component';

describe('ConclusionModulo4Component', () => {
  let component: ConclusionModulo4Component;
  let fixture: ComponentFixture<ConclusionModulo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo4Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
