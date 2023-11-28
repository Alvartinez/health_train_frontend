import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModulo7Component } from './conclusion-modulo7.component';

describe('ConclusionModulo7Component', () => {
  let component: ConclusionModulo7Component;
  let fixture: ComponentFixture<ConclusionModulo7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModulo7Component]
    });
    fixture = TestBed.createComponent(ConclusionModulo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
