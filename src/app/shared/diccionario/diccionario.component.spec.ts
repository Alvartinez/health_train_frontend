import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiccionarioComponent } from './diccionario.component';

describe('DiccionarioComponent', () => {
  let component: DiccionarioComponent;
  let fixture: ComponentFixture<DiccionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiccionarioComponent]
    });
    fixture = TestBed.createComponent(DiccionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
