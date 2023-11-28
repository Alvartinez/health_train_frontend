import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano21Component } from './texto-plano21.component';

describe('TextoPlano21Component', () => {
  let component: TextoPlano21Component;
  let fixture: ComponentFixture<TextoPlano21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano21Component]
    });
    fixture = TestBed.createComponent(TextoPlano21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
