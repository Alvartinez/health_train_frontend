import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano1Component } from './texto-plano1.component';

describe('TextoPlano1Component', () => {
  let component: TextoPlano1Component;
  let fixture: ComponentFixture<TextoPlano1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano1Component]
    });
    fixture = TestBed.createComponent(TextoPlano1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
