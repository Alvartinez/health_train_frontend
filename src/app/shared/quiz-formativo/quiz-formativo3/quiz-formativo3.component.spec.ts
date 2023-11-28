import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo3Component } from './quiz-formativo3.component';

describe('QuizFormativo3Component', () => {
  let component: QuizFormativo3Component;
  let fixture: ComponentFixture<QuizFormativo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo3Component]
    });
    fixture = TestBed.createComponent(QuizFormativo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
