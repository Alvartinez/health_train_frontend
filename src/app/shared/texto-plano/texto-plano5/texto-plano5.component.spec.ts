import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano5Component } from './texto-plano5.component';

describe('TextoPlano5Component', () => {
  let component: TextoPlano5Component;
  let fixture: ComponentFixture<TextoPlano5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano5Component]
    });
    fixture = TestBed.createComponent(TextoPlano5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
