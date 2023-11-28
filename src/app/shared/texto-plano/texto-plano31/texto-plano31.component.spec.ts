import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano31Component } from './texto-plano31.component';

describe('TextoPlano31Component', () => {
  let component: TextoPlano31Component;
  let fixture: ComponentFixture<TextoPlano31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano31Component]
    });
    fixture = TestBed.createComponent(TextoPlano31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
