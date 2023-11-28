import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano9Component } from './texto-plano9.component';

describe('TextoPlano9Component', () => {
  let component: TextoPlano9Component;
  let fixture: ComponentFixture<TextoPlano9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano9Component]
    });
    fixture = TestBed.createComponent(TextoPlano9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
