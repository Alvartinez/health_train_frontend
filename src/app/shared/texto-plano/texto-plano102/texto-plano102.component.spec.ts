import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano102Component } from './texto-plano102.component';

describe('TextoPlano102Component', () => {
  let component: TextoPlano102Component;
  let fixture: ComponentFixture<TextoPlano102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano102Component]
    });
    fixture = TestBed.createComponent(TextoPlano102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
