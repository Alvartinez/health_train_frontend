import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase10Component } from './modulo-base10.component';

describe('ModuloBase10Component', () => {
  let component: ModuloBase10Component;
  let fixture: ComponentFixture<ModuloBase10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase10Component]
    });
    fixture = TestBed.createComponent(ModuloBase10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
