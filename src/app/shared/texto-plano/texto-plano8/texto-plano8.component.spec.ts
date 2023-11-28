import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano8Component } from './texto-plano8.component';

describe('TextoPlano8Component', () => {
  let component: TextoPlano8Component;
  let fixture: ComponentFixture<TextoPlano8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano8Component]
    });
    fixture = TestBed.createComponent(TextoPlano8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
