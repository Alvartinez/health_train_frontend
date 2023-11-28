import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano91Component } from './texto-plano91.component';

describe('TextoPlano91Component', () => {
  let component: TextoPlano91Component;
  let fixture: ComponentFixture<TextoPlano91Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano91Component]
    });
    fixture = TestBed.createComponent(TextoPlano91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
