import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColaborationsComponent } from './footer-colaborations.component';

describe('FooterColaborationsComponent', () => {
  let component: FooterColaborationsComponent;
  let fixture: ComponentFixture<FooterColaborationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterColaborationsComponent]
    });
    fixture = TestBed.createComponent(FooterColaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
