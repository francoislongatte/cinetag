import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getTags} from '../../ngrx/selectors/tag.selector';
import {TagState} from '../../ngrx/reducers/tag.reducers';
import {ListForm} from '../tagline.form';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import * as tagAction from '../../ngrx/actions/tag.action';

@Component({
  selector: 'app-tagline-list',
  templateUrl: './tagline-list.component.html',
  styleUrls: ['./tagline-list.component.scss']
})
export class TaglineListComponent implements OnInit {

  form: FormGroup;
  term = '';

  constructor(private store: Store<TagState>) {
  }

  ngOnInit() {
    this.store.select(getTags).subscribe(tags => {
      this.form = new ListForm(tags);
    });
  }

  get getListItems() {
    return (this.form.get('items') as FormArray).controls;
  }

  itemImage(formControl: FormControl): string {
    return formControl && formControl.get('image') && formControl.get('image').value ? formControl.get('image').value : null;
  }

  itemMessage(formControl: FormControl): string {
    return formControl && formControl.get('message') && formControl.get('message').value ? formControl.get('message').value : null;
  }

  selectedItem(formControl: FormControl) {
    this.store.dispatch(new tagAction.SelectTag(formControl.get('id').value));
  }

  resetSelected() {
    this.store.dispatch(new tagAction.ResetTag());
  }


  clearTerm() {
    this.term = null;
  }

  deleteAllItem() {
    this.store.dispatch(new tagAction.DeleteAllTag());
  }
}
