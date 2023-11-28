import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule5Component } from './content-module5.component';

describe('ContentModule5Component', () => {
  let component: ContentModule5Component;
  let fixture: ComponentFixture<ContentModule5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule5Component]
    });
    fixture = TestBed.createComponent(ContentModule5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
