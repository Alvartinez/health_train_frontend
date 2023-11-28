import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano53Component } from './texto-plano53.component';

describe('TextoPlano53Component', () => {
  let component: TextoPlano53Component;
  let fixture: ComponentFixture<TextoPlano53Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano53Component]
    });
    fixture = TestBed.createComponent(TextoPlano53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
