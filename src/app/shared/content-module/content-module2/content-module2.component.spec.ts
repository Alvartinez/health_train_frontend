import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule2Component } from './content-module2.component';

describe('ContentModule2Component', () => {
  let component: ContentModule2Component;
  let fixture: ComponentFixture<ContentModule2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule2Component]
    });
    fixture = TestBed.createComponent(ContentModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
