import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaglineAddComponent} from './tagline-add.component';

describe('TaglineAddComponent', () => {
  let component: TaglineAddComponent;
  let fixture: ComponentFixture<TaglineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaglineAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
