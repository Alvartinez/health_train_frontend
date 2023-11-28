import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks9Component } from './feedbacks-asks9.component';

describe('FeedbacksAsks9Component', () => {
  let component: FeedbacksAsks9Component;
  let fixture: ComponentFixture<FeedbacksAsks9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks9Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
