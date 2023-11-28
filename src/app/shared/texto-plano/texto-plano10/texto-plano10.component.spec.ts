import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano10Component } from './texto-plano10.component';

describe('TextoPlano10Component', () => {
  let component: TextoPlano10Component;
  let fixture: ComponentFixture<TextoPlano10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano10Component]
    });
    fixture = TestBed.createComponent(TextoPlano10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
