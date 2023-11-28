import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano103Component } from './texto-plano103.component';

describe('TextoPlano103Component', () => {
  let component: TextoPlano103Component;
  let fixture: ComponentFixture<TextoPlano103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano103Component]
    });
    fixture = TestBed.createComponent(TextoPlano103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
