import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TagState} from '../../ngrx/reducers/tag.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<TagState>) {
  }

  ngOnInit() {
  }

  play() {
    this.store.dispatch({type: 'PLAY'});
  }

  pause() {
    this.store.dispatch({type: 'PAUSE'});
  }

}
