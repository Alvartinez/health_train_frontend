import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks2Component } from './feedbacks-asks2.component';

describe('FeedbacksAsks2Component', () => {
  let component: FeedbacksAsks2Component;
  let fixture: ComponentFixture<FeedbacksAsks2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks2Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
