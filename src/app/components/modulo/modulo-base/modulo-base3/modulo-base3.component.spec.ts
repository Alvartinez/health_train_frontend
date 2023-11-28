import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase3Component } from './modulo-base3.component';

describe('ModuloBase3Component', () => {
  let component: ModuloBase3Component;
  let fixture: ComponentFixture<ModuloBase3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase3Component]
    });
    fixture = TestBed.createComponent(ModuloBase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
