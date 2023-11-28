import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano3Component } from './texto-plano3.component';

describe('TextoPlano3Component', () => {
  let component: TextoPlano3Component;
  let fixture: ComponentFixture<TextoPlano3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano3Component]
    });
    fixture = TestBed.createComponent(TextoPlano3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
