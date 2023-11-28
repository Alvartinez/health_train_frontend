import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBase5Component } from './modulo-base5.component';

describe('ModuloBase5Component', () => {
  let component: ModuloBase5Component;
  let fixture: ComponentFixture<ModuloBase5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBase5Component]
    });
    fixture = TestBed.createComponent(ModuloBase5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
