import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo6Component } from './conclusion-modulo6.component';

describe('ConclusionModulo6Component', () => {
  let component: ConclusionModulo6Component;
  let fixture: ComponentFixture<ConclusionModulo6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo6Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
