import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano62Component } from './texto-plano62.component';

describe('TextoPlano62Component', () => {
  let component: TextoPlano62Component;
  let fixture: ComponentFixture<TextoPlano62Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano62Component]
    });
    fixture = TestBed.createComponent(TextoPlano62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
