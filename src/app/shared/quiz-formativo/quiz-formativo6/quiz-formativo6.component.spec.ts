import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo6Component } from './quiz-formativo6.component';

describe('QuizFormativo6Component', () => {
  let component: QuizFormativo6Component;
  let fixture: ComponentFixture<QuizFormativo6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo6Component]
    });
    fixture = TestBed.createComponent(QuizFormativo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
