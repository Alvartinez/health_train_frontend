import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano44Component } from './texto-plano44.component';

describe('TextoPlano44Component', () => {
  let component: TextoPlano44Component;
  let fixture: ComponentFixture<TextoPlano44Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano44Component]
    });
    fixture = TestBed.createComponent(TextoPlano44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
