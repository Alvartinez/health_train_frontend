import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano43Component } from './texto-plano43.component';

describe('TextoPlano43Component', () => {
  let component: TextoPlano43Component;
  let fixture: ComponentFixture<TextoPlano43Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano43Component]
    });
    fixture = TestBed.createComponent(TextoPlano43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
