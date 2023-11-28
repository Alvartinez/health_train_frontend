import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano6Component } from './texto-plano6.component';

describe('TextoPlano6Component', () => {
  let component: TextoPlano6Component;
  let fixture: ComponentFixture<TextoPlano6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano6Component]
    });
    fixture = TestBed.createComponent(TextoPlano6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
