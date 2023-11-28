import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano71Component } from './texto-plano71.component';

describe('TextoPlano71Component', () => {
  let component: TextoPlano71Component;
  let fixture: ComponentFixture<TextoPlano71Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano71Component]
    });
    fixture = TestBed.createComponent(TextoPlano71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
