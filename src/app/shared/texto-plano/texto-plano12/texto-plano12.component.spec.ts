import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano12Component } from './texto-plano12.component';

describe('TextoPlano12Component', () => {
  let component: TextoPlano12Component;
  let fixture: ComponentFixture<TextoPlano12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano12Component]
    });
    fixture = TestBed.createComponent(TextoPlano12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
