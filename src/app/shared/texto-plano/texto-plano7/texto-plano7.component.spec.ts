import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano7Component } from './texto-plano7.component';

describe('TextoPlano7Component', () => {
  let component: TextoPlano7Component;
  let fixture: ComponentFixture<TextoPlano7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano7Component]
    });
    fixture = TestBed.createComponent(TextoPlano7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
