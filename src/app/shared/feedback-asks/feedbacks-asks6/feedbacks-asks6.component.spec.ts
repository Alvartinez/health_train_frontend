import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks6Component } from './feedbacks-asks6.component';

describe('FeedbacksAsks6Component', () => {
  let component: FeedbacksAsks6Component;
  let fixture: ComponentFixture<FeedbacksAsks6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks6Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
