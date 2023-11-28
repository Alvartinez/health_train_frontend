import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule3Component } from './content-module3.component';

describe('ContentModule3Component', () => {
  let component: ContentModule3Component;
  let fixture: ComponentFixture<ContentModule3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule3Component]
    });
    fixture = TestBed.createComponent(ContentModule3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
