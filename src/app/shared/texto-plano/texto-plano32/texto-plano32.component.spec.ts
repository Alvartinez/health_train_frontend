import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano32Component } from './texto-plano32.component';

describe('TextoPlano32Component', () => {
  let component: TextoPlano32Component;
  let fixture: ComponentFixture<TextoPlano32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano32Component]
    });
    fixture = TestBed.createComponent(TextoPlano32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
