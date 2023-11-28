import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEmbeddedComponent } from './content-embedded.component';

describe('ContentEmbeddedComponent', () => {
  let component: ContentEmbeddedComponent;
  let fixture: ComponentFixture<ContentEmbeddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentEmbeddedComponent]
    });
    fixture = TestBed.createComponent(ContentEmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
