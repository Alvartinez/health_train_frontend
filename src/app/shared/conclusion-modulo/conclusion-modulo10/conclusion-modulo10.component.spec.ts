import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo10Component } from './conclusion-modulo10.component';

describe('ConclusionModulo10Component', () => {
  let component: ConclusionModulo10Component;
  let fixture: ComponentFixture<ConclusionModulo10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo10Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
