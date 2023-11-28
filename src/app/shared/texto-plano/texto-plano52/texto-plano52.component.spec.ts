import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano52Component } from './texto-plano52.component';

describe('TextoPlano52Component', () => {
  let component: TextoPlano52Component;
  let fixture: ComponentFixture<TextoPlano52Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano52Component]
    });
    fixture = TestBed.createComponent(TextoPlano52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
