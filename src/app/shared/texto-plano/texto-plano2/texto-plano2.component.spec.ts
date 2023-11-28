import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano2Component } from './texto-plano2.component';

describe('TextoPlano2Component', () => {
  let component: TextoPlano2Component;
  let fixture: ComponentFixture<TextoPlano2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano2Component]
    });
    fixture = TestBed.createComponent(TextoPlano2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
