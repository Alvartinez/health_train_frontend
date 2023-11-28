import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks3Component } from './feedbacks-asks3.component';

describe('FeedbacksAsks3Component', () => {
  let component: FeedbacksAsks3Component;
  let fixture: ComponentFixture<FeedbacksAsks3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks3Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
