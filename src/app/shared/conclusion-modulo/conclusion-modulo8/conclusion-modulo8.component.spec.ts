import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo8Component } from './conclusion-modulo8.component';

describe('ConclusionModulo8Component', () => {
  let component: ConclusionModulo8Component;
  let fixture: ComponentFixture<ConclusionModulo8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo8Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
