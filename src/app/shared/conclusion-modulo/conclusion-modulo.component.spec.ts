import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionModuloComponent } from './conclusion-modulo.component';

describe('ConclusionModuloComponent', () => {
  let component: ConclusionModuloComponent;
  let fixture: ComponentFixture<ConclusionModuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionModuloComponent]
    });
    fixture = TestBed.createComponent(ConclusionModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
