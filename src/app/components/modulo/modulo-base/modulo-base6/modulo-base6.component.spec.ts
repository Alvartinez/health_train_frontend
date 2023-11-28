import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase6Component } from './modulo-base6.component';

describe('ModuloBase6Component', () => {
  let component: ModuloBase6Component;
  let fixture: ComponentFixture<ModuloBase6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase6Component]
    });
    fixture = TestBed.createComponent(ModuloBase6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
