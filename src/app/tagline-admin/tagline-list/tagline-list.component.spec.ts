import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaglineListComponent} from './tagline-list.component';

describe('TaglineListComponent', () => {
  let component: TaglineListComponent;
  let fixture: ComponentFixture<TaglineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaglineListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
