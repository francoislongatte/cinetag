import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayTagAnimationComponent} from './display-tag-animation.component';

describe('DisplayTagAnimationComponent', () => {
  let component: DisplayTagAnimationComponent;
  let fixture: ComponentFixture<DisplayTagAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTagAnimationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTagAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
