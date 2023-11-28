import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModule6Component } from './content-module6.component';

describe('ContentModule6Component', () => {
  let component: ContentModule6Component;
  let fixture: ComponentFixture<ContentModule6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentModule6Component]
    });
    fixture = TestBed.createComponent(ContentModule6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
