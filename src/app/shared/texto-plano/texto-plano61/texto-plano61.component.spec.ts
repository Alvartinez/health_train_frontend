import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano61Component } from './texto-plano61.component';

describe('TextoPlano61Component', () => {
  let component: TextoPlano61Component;
  let fixture: ComponentFixture<TextoPlano61Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano61Component]
    });
    fixture = TestBed.createComponent(TextoPlano61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
