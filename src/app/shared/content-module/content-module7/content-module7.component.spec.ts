import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule7Component } from './content-module7.component';

describe('ContentModule7Component', () => {
  let component: ContentModule7Component;
  let fixture: ComponentFixture<ContentModule7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule7Component]
    });
    fixture = TestBed.createComponent(ContentModule7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
