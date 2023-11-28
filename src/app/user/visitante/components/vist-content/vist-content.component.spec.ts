import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistContentComponent } from './vist-content.component';

describe('VistContentComponent', () => {
  let component: VistContentComponent;
  let fixture: ComponentFixture<VistContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistContentComponent]
    });
    fixture = TestBed.createComponent(VistContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
