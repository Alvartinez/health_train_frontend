import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano94Component } from './texto-plano94.component';

describe('TextoPlano94Component', () => {
  let component: TextoPlano94Component;
  let fixture: ComponentFixture<TextoPlano94Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano94Component]
    });
    fixture = TestBed.createComponent(TextoPlano94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
