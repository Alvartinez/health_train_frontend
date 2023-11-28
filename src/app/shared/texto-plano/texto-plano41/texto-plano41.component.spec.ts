import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano41Component } from './texto-plano41.component';

describe('TextoPlano41Component', () => {
  let component: TextoPlano41Component;
  let fixture: ComponentFixture<TextoPlano41Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano41Component]
    });
    fixture = TestBed.createComponent(TextoPlano41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
