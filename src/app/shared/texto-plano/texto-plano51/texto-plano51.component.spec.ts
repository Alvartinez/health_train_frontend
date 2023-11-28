import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano51Component } from './texto-plano51.component';

describe('TextoPlano51Component', () => {
  let component: TextoPlano51Component;
  let fixture: ComponentFixture<TextoPlano51Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano51Component]
    });
    fixture = TestBed.createComponent(TextoPlano51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
