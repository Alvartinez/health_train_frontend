import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormativoComponent } from './quiz-formativo.component';

describe('QuizFormativoComponent', () => {
  let component: QuizFormativoComponent;
  let fixture: ComponentFixture<QuizFormativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFormativoComponent]
    });
    fixture = TestBed.createComponent(QuizFormativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
