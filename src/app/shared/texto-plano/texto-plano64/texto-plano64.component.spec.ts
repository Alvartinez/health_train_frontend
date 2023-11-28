import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano64Component } from './texto-plano64.component';

describe('TextoPlano64Component', () => {
  let component: TextoPlano64Component;
  let fixture: ComponentFixture<TextoPlano64Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano64Component]
    });
    fixture = TestBed.createComponent(TextoPlano64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
