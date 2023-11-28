import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackExamComponent } from './feedback-exam.component';

describe('FeedbackExamComponent', () => {
  let component: FeedbackExamComponent;
  let fixture: ComponentFixture<FeedbackExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackExamComponent]
    });
    fixture = TestBed.createComponent(FeedbackExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
