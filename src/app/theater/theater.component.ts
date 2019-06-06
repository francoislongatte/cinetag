import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TagState} from '../ngrx/reducers/tag.reducers';
import {Observable} from 'rxjs';
import {getConfig} from '../ngrx/selectors/tag.selector';
@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  constructor(private store: Store<TagState>) {
  }

  ngOnInit() {
  }

  get getConfig(): Observable<{ play: boolean, speed: number }> {
    return this.store.select(getConfig);
  }

}
