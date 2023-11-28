import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule4Component } from './content-module4.component';

describe('ContentModule4Component', () => {
  let component: ContentModule4Component;
  let fixture: ComponentFixture<ContentModule4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule4Component]
    });
    fixture = TestBed.createComponent(ContentModule4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
