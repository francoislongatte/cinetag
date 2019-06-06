import {Injectable} from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {TagState} from '../../ngrx/reducers/tag.reducers';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {
  }

  getState(): TagState {
    return JSON.parse(localStorage.getItem(env.nLocalstorage));
  }

  setState(newState: TagState) {
    localStorage.setItem(env.nLocalstorage, JSON.stringify(newState));
  }


}
