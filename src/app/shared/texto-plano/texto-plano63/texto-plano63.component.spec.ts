import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano63Component } from './texto-plano63.component';

describe('TextoPlano63Component', () => {
  let component: TextoPlano63Component;
  let fixture: ComponentFixture<TextoPlano63Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano63Component]
    });
    fixture = TestBed.createComponent(TextoPlano63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
