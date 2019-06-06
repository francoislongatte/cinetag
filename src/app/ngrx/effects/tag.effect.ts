import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import * as tag from '../actions/tag.action';
import {
  AddTagSuccess, DeleteAllTagSuccess,
  DeleteTagSuccess, PauseSuccess, PlaySuccess,
  ResetTagSuccess,
  SelectTagSuccess, StartSuccess,
  UpdateTagSuccess
} from '../actions/tag.action';


import {Tag} from '../../share/models/tag';
import {initialState, TagState} from '../reducers/tag.reducers';
import {LocalstorageService} from '../../share/service/localstorage.service';
import {ToastrService} from 'ngx-toastr';


@Injectable()
export class TagEffects {

  @Effect()
  $start = this.actions
    .pipe(
      ofType<tag.Start>(tag.START_APP),
      mergeMap(() => of(this.lsStorage.getState())),
      map((lsState: TagState) => {
        if (lsState) {
          return new StartSuccess(lsState);
        } else {
          this.lsStorage.setState(initialState);
          return new StartSuccess(initialState);
        }
      })
    );

  @Effect()
  $resetTag = this.actions
    .pipe(
      ofType<tag.ResetTag>(tag.RESET_TAG),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newState: TagState = {
          ...getState,
          tagLine: getState.tagLine.map((tagLine: Tag) => {
            tagLine.selected = false;
            return tagLine;
          })
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Reset All Selected Tag!', 'TagLine List', {timeOut: 3000});
        return new ResetTagSuccess();
      })
    );

  @Effect()
  $selectTag = this.actions
    .pipe(
      ofType<tag.SelectTag>(tag.SELECT_TAG),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        if (getState && getState.tagLine && getState.tagLine.length > 0) {
          const newState: TagState = {
            ...getState,
            tagLine: getState.tagLine.map(item => {
              if (item.id === action.id) {
                item.selected = !item.selected;
                return item;
              } else {
                item.selected = false;
                return item;
              }
            })
          };
          this.lsStorage.setState(newState);
        }
        this.toastr.success('Success Select Tag!', 'TagLine List', {timeOut: 3000});
        return new SelectTagSuccess(action.id);
      })
    );

  @Effect()
  $addTag = this.actions
    .pipe(
      ofType<tag.AddTag>(tag.ADD_TAG),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newTag: Tag = {
          id: action.id,
          image: action.tag.image,
          message: action.tag.message,
          selected: action.tag.selected
        };
        const newState: TagState = {
          ...getState,
          tagLine: [
            ...getState.tagLine,
            newTag
          ]
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Add TagLine!', 'Add TagLine', {timeOut: 3000});
        return new AddTagSuccess(newTag);
      })
    );

  @Effect()
  $updateTag = this.actions
    .pipe(
      ofType<tag.UpdateTag>(tag.UPDATE_TAG),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newState: TagState = {
          ...getState,
          tagLine: [
            ...getState.tagLine.map(item => {
              if (item.id === action.id) {
                item.id = action.tag.id;
                item.image = action.tag.image;
                item.message = action.tag.message;
                item.selected = action.tag.selected;
              }
              return item;
            })
          ]
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Update Tag!', 'Edit TagLine', {timeOut: 3000});
        return new UpdateTagSuccess(action.id, action.tag);
      })
    );

  @Effect()
  $deleteTag = this.actions
    .pipe(
      ofType<tag.DeleteTag>(tag.DELETE_TAG),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newState: TagState = {
          ...getState,
          tagLine: [
            ...getState.tagLine.filter(item => item.id !== action.id)
          ]
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Delete Tag!', 'Edit TagLine', {timeOut: 3000});
        return new DeleteTagSuccess(action.id);
      })
    );

  @Effect()
  $deleteAllTag = this.actions
    .pipe(
      ofType<tag.DeleteAllTag>(tag.DELETE_ALL_TAG),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newState: TagState = {
          ...getState,
          tagLine: []
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Delete All TagLine!', 'TagLine List', {timeOut: 3000});
        return new DeleteAllTagSuccess();
      })
    );

  @Effect()
  $play = this.actions
    .pipe(
      ofType<tag.Play>(tag.PLAY_DISPLAY),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newState: TagState = {
          ...getState,
          config: {
            ...getState.config,
            play: true
          }
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Play Display!', 'Display Action', {timeOut: 3000});
        return new PlaySuccess();
      })
    );

  @Effect()
  $pause = this.actions
    .pipe(
      ofType<tag.Pause>(tag.PAUSE_DISPLAY),
      map(action => {
        const getState: TagState = this.lsStorage.getState();
        const newState: TagState = {
          ...getState,
          config: {
            ...getState.config,
            play: false
          }
        };
        this.lsStorage.setState(newState);
        this.toastr.success('Success Pause Display!', 'Display Action', {timeOut: 3000});
        return new PauseSuccess();
      })
    );


  constructor(
    private lsStorage: LocalstorageService,
    private toastr: ToastrService,
    private actions: Actions
  ) {
  }

}
