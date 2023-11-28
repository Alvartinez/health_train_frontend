import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano101Component } from './texto-plano101.component';

describe('TextoPlano101Component', () => {
  let component: TextoPlano101Component;
  let fixture: ComponentFixture<TextoPlano101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano101Component]
    });
    fixture = TestBed.createComponent(TextoPlano101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
