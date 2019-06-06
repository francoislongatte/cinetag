import {Component, OnInit, ViewChild} from '@angular/core';
import * as tag from './ngrx/actions/tag.action';
import {ToastContainerDirective, ToastrService} from 'ngx-toastr';
import {Store} from '@ngrx/store';
import {TagState} from './ngrx/reducers/tag.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective,{ static: true }) toastContainer: ToastContainerDirective;


  constructor(
    private store: Store<TagState>,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    this.store.dispatch(new tag.Start());
  }

}
