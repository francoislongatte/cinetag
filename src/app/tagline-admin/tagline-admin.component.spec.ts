import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaglineAdminComponent} from './tagline-admin.component';

describe('TaglineListComponent', () => {
  let component: TaglineAdminComponent;
  let fixture: ComponentFixture<TaglineAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaglineAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
