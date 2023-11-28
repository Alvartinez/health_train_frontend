import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAsksComponent } from './feedback-asks.component';

describe('FeedbackAsksComponent', () => {
  let component: FeedbackAsksComponent;
  let fixture: ComponentFixture<FeedbackAsksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackAsksComponent]
    });
    fixture = TestBed.createComponent(FeedbackAsksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
