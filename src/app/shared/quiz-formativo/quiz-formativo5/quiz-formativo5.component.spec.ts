import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo5Component } from './quiz-formativo5.component';

describe('QuizFormativo5Component', () => {
  let component: QuizFormativo5Component;
  let fixture: ComponentFixture<QuizFormativo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo5Component]
    });
    fixture = TestBed.createComponent(QuizFormativo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
