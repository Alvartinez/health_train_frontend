import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase9Component } from './modulo-base9.component';

describe('ModuloBase9Component', () => {
  let component: ModuloBase9Component;
  let fixture: ComponentFixture<ModuloBase9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase9Component]
    });
    fixture = TestBed.createComponent(ModuloBase9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
