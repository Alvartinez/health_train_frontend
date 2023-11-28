import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks5Component } from './feedbacks-asks5.component';

describe('FeedbacksAsks5Component', () => {
  let component: FeedbacksAsks5Component;
  let fixture: ComponentFixture<FeedbacksAsks5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks5Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
