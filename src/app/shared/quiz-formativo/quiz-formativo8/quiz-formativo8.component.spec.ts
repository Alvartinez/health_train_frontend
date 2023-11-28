import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo8Component } from './quiz-formativo8.component';

describe('QuizFormativo8Component', () => {
  let component: QuizFormativo8Component;
  let fixture: ComponentFixture<QuizFormativo8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo8Component]
    });
    fixture = TestBed.createComponent(QuizFormativo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
