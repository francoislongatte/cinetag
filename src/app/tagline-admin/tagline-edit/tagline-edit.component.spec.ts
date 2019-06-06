import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaglineEditComponent} from './tagline-edit.component';

describe('TaglineEditComponent', () => {
  let component: TaglineEditComponent;
  let fixture: ComponentFixture<TaglineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaglineEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
