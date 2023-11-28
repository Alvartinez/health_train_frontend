import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks10Component } from './feedbacks-asks10.component';

describe('FeedbacksAsks10Component', () => {
  let component: FeedbacksAsks10Component;
  let fixture: ComponentFixture<FeedbacksAsks10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks10Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
