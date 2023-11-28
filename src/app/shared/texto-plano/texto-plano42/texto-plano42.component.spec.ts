import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano42Component } from './texto-plano42.component';

describe('TextoPlano42Component', () => {
  let component: TextoPlano42Component;
  let fixture: ComponentFixture<TextoPlano42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano42Component]
    });
    fixture = TestBed.createComponent(TextoPlano42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
