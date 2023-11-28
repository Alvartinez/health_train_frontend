import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks8Component } from './feedbacks-asks8.component';

describe('FeedbacksAsks8Component', () => {
  let component: FeedbacksAsks8Component;
  let fixture: ComponentFixture<FeedbacksAsks8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks8Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
