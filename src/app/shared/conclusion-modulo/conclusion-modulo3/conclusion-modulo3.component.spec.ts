import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo3Component } from './conclusion-modulo3.component';

describe('ConclusionModulo3Component', () => {
  let component: ConclusionModulo3Component;
  let fixture: ComponentFixture<ConclusionModulo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo3Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
