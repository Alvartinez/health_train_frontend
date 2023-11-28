import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase8Component } from './modulo-base8.component';

describe('ModuloBase8Component', () => {
  let component: ModuloBase8Component;
  let fixture: ComponentFixture<ModuloBase8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase8Component]
    });
    fixture = TestBed.createComponent(ModuloBase8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
