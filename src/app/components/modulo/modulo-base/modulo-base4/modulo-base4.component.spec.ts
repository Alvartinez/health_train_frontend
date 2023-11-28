import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase4Component } from './modulo-base4.component';

describe('ModuloBase4Component', () => {
  let component: ModuloBase4Component;
  let fixture: ComponentFixture<ModuloBase4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase4Component]
    });
    fixture = TestBed.createComponent(ModuloBase4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
