import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano72Component } from './texto-plano72.component';

describe('TextoPlano72Component', () => {
  let component: TextoPlano72Component;
  let fixture: ComponentFixture<TextoPlano72Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano72Component]
    });
    fixture = TestBed.createComponent(TextoPlano72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
