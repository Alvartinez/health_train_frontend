import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule10Component } from './content-module10.component';

describe('ContentModule10Component', () => {
  let component: ContentModule10Component;
  let fixture: ComponentFixture<ContentModule10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule10Component]
    });
    fixture = TestBed.createComponent(ContentModule10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
