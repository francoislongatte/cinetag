import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Tag} from '../share/models/tag';

export class AddForm extends FormGroup {
  constructor() {
    super({
      message: new FormControl('', [Validators.min(5), Validators.required]),
      image: new FormControl('', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.])[/\\w .-]*/?'), Validators.required]),
      selected: new FormControl(false)
    });
  }
}

export class EditForm extends FormGroup {
  constructor(Item: Tag) {
    super({
      id: new FormControl(Item.id, Validators.required),
      message: new FormControl(Item.message, [Validators.required, Validators.nullValidator]),
      image: new FormControl(Item.image, [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.])[/\\w .-]*/?'), Validators.required]),
      selected: new FormControl(Item.selected)
    });
  }
}

export class ListForm extends FormGroup {
  constructor(allItem: Tag[]) {
    super({
      items: new FormArray([]),
    });
    if (allItem && allItem.length > 0) {
      this.AddAllItem(allItem);
    }
  }

  AddAllItem(allItem: Tag[]) {
    const formArray = this.get('items') as FormArray;
    allItem.map(item => {
      formArray.push(
        new FormGroup({
          selected: new FormControl(item.selected),
          id: new FormControl(item.id),
          image: new FormControl(item.image),
          message: new FormControl(item.message)
        }));
    });
  }
}
