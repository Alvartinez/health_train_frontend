import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule1Component } from './content-module1.component';

describe('ContentModule1Component', () => {
  let component: ContentModule1Component;
  let fixture: ComponentFixture<ContentModule1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule1Component]
    });
    fixture = TestBed.createComponent(ContentModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
