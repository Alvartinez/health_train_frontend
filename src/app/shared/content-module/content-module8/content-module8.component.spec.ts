import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule8Component } from './content-module8.component';

describe('ContentModule8Component', () => {
  let component: ContentModule8Component;
  let fixture: ComponentFixture<ContentModule8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule8Component]
    });
    fixture = TestBed.createComponent(ContentModule8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
