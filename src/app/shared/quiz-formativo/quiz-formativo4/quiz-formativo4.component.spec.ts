import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo4Component } from './quiz-formativo4.component';

describe('QuizFormativo4Component', () => {
  let component: QuizFormativo4Component;
  let fixture: ComponentFixture<QuizFormativo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo4Component]
    });
    fixture = TestBed.createComponent(QuizFormativo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
