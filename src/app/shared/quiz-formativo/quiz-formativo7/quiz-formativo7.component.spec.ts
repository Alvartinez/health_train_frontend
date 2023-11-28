import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo7Component } from './quiz-formativo7.component';

describe('QuizFormativo7Component', () => {
  let component: QuizFormativo7Component;
  let fixture: ComponentFixture<QuizFormativo7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo7Component]
    });
    fixture = TestBed.createComponent(QuizFormativo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
