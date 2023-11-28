import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPlano92Component } from './texto-plano92.component';

describe('TextoPlano92Component', () => {
  let component: TextoPlano92Component;
  let fixture: ComponentFixture<TextoPlano92Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoPlano92Component]
    });
    fixture = TestBed.createComponent(TextoPlano92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
