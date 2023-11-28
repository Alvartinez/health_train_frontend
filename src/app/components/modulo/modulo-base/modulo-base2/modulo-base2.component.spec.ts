import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase2Component } from './modulo-base2.component';

describe('ModuloBase2Component', () => {
  let component: ModuloBase2Component;
  let fixture: ComponentFixture<ModuloBase2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase2Component]
    });
    fixture = TestBed.createComponent(ModuloBase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
