import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule9Component } from './content-module9.component';

describe('ContentModule9Component', () => {
  let component: ContentModule9Component;
  let fixture: ComponentFixture<ContentModule9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule9Component]
    });
    fixture = TestBed.createComponent(ContentModule9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
