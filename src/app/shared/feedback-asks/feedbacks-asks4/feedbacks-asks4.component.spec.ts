import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAsks4Component } from './feedbacks-asks4.component';

describe('FeedbacksAsks4Component', () => {
  let component: FeedbacksAsks4Component;
  let fixture: ComponentFixture<FeedbacksAsks4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksAsks4Component]
    });
    fixture = TestBed.createComponent(FeedbacksAsks4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
