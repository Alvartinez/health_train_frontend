import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBaseComponent } from './modulo-base.component';

describe('ModuloBaseComponent', () => {
  let component: ModuloBaseComponent;
  let fixture: ComponentFixture<ModuloBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBaseComponent]
    });
    fixture = TestBed.createComponent(ModuloBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
