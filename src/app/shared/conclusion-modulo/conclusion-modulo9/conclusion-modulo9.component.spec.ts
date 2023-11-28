import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo9Component } from './conclusion-modulo9.component';

describe('ConclusionModulo9Component', () => {
  let component: ConclusionModulo9Component;
  let fixture: ComponentFixture<ConclusionModulo9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo9Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
