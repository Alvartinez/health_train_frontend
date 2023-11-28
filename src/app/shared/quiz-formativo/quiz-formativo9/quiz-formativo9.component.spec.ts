import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo9Component } from './quiz-formativo9.component';

describe('QuizFormativo9Component', () => {
  let component: QuizFormativo9Component;
  let fixture: ComponentFixture<QuizFormativo9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo9Component]
    });
    fixture = TestBed.createComponent(QuizFormativo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
