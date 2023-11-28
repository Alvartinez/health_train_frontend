import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo5Component } from './conclusion-modulo5.component';

describe('ConclusionModulo5Component', () => {
  let component: ConclusionModulo5Component;
  let fixture: ComponentFixture<ConclusionModulo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo5Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
