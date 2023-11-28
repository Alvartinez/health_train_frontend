import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativo10Component } from './quiz-formativo10.component';

describe('QuizFormativo10Component', () => {
  let component: QuizFormativo10Component;
  let fixture: ComponentFixture<QuizFormativo10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativo10Component]
    });
    fixture = TestBed.createComponent(QuizFormativo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
