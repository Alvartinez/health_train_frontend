import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano93Component } from './texto-plano93.component';

describe('TextoPlano93Component', () => {
  let component: TextoPlano93Component;
  let fixture: ComponentFixture<TextoPlano93Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano93Component]
    });
    fixture = TestBed.createComponent(TextoPlano93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
