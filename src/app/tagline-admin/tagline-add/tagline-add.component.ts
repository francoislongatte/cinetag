import {Component, OnInit} from '@angular/core';
import {TagState} from '../../ngrx/reducers/tag.reducers';
import {ToastrService} from 'ngx-toastr';
import {Store} from '@ngrx/store';
import {AddForm} from '../tagline.form';
import {FormGroup} from '@angular/forms';
import {AddTag} from '../../ngrx/actions/tag.action';

@Component({
  selector: 'app-tagline-add',
  templateUrl: './tagline-add.component.html',
  styleUrls: ['./tagline-add.component.scss']
})
export class TaglineAddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store<TagState>,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.form = new AddForm();
  }

  addTag() {
    if (this.form.invalid) {
      for (let inner in this.form.controls) {
        this.form.get(inner).markAsTouched();
      }
      this.toastr.error('Form is invalid!', 'Add TagLine', {timeOut: 3000});
      return;
    } else {
      this.store.dispatch(new AddTag(this.form.value));
      this.form.reset();
    }
  }

  cancel() {
    this.form.reset();
  }

}
