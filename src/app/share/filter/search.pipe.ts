import {Pipe, PipeTransform} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: FormGroup[], term: string): any {
    if (!items || !term) {
      return items;
    }
    return items.filter((item: FormGroup) => {
      return item.get('message').value.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });
  }

}
