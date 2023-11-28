import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase7Component } from './modulo-base7.component';

describe('ModuloBase7Component', () => {
  let component: ModuloBase7Component;
  let fixture: ComponentFixture<ModuloBase7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase7Component]
    });
    fixture = TestBed.createComponent(ModuloBase7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
