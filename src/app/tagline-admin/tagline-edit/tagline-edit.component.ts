import {Component, OnInit} from '@angular/core';
import {getTags} from '../../ngrx/selectors/tag.selector';
import {TagState} from '../../ngrx/reducers/tag.reducers';
import {FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {EditForm} from '../tagline.form';
import {Tag} from '../../share/models/tag';
import {ToastrService} from 'ngx-toastr';

import * as tagAction from '../../ngrx/actions/tag.action';

@Component({
  selector: 'app-tagline-edit',
  templateUrl: './tagline-edit.component.html',
  styleUrls: ['./tagline-edit.component.scss']
})
export class TaglineEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store<TagState>,
    private toastr: ToastrService
  ) {
    this.form = new EditForm({
      id: null,
      message: null,
      image: null,
      selected: null
    });
    this.form.disable();
  }

  ngOnInit() {
    this.store.select<Tag[]>(getTags).subscribe((tags: Tag[]) => {
      if (tags && tags.find(tag => tag.selected === true)) {
        const selectedItem = tags.find(tag => tag.selected === true);
        this.form.setValue({...selectedItem});
        this.form.enable();
      } else {
        this.form.reset();
        this.form.disable();
      }
    });
  }

  isEmpty(): boolean {
    return this.form.value !== {
      id: null,
      message: null,
      image: null,
      selected: null
    };
  }

  edit() {
    if (this.form.invalid) {
      for (let inner in this.form.controls) {
        this.form.get(inner).markAsTouched();
      }
      this.toastr.error('Form is invalid!', 'Edit TagLine', {timeOut: 3000});
      return;
    } else {
      this.store.dispatch(new tagAction.UpdateTag(this.form.value.id, this.form.value));
    }
  }

  delete() {
    if (this.form.invalid) {
      return;
    } else {
      this.store.dispatch(new tagAction.DeleteTag(this.form.value.id));
    }
  }

}
