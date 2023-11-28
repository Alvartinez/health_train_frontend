import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo2Component } from './conclusion-modulo2.component';

describe('ConclusionModulo2Component', () => {
  let component: ConclusionModulo2Component;
  let fixture: ComponentFixture<ConclusionModulo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo2Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
