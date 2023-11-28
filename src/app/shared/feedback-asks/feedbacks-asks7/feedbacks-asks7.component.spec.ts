import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks7Component } from './feedbacks-asks7.component';

describe('FeedbacksAsks7Component', () => {
  let component: FeedbacksAsks7Component;
  let fixture: ComponentFixture<FeedbacksAsks7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks7Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
