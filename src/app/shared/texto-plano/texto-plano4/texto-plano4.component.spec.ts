import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano4Component } from './texto-plano4.component';

describe('TextoPlano4Component', () => {
  let component: TextoPlano4Component;
  let fixture: ComponentFixture<TextoPlano4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano4Component]
    });
    fixture = TestBed.createComponent(TextoPlano4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
