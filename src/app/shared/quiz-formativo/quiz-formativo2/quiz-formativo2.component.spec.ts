import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo2Component } from './quiz-formativo2.component';

describe('QuizFormativo2Component', () => {
  let component: QuizFormativo2Component;
  let fixture: ComponentFixture<QuizFormativo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo2Component]
    });
    fixture = TestBed.createComponent(QuizFormativo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
