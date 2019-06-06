import {Action} from '@ngrx/store';
import {Tag} from '../../share/models/tag';
import {TagState} from '../reducers/tag.reducers';

/**
 * All the constants to define our actions
 */
export const START_APP = 'START_APP';
export const START_APP_SUCCESS = 'START_APP_SUCCESS';
export const PLAY_DISPLAY = 'PLAY_DISPLAY';
export const PLAY_DISPLAY_SUCCESS = 'PLAY_DISPLAY_SUCCESS';
export const PAUSE_DISPLAY = 'PAUSE_DISPLAY';
export const PAUSE_DISPLAY_SUCCESS = 'PAUSE_DISPLAY_SUCCESS';
export const ADD_TAG = 'ADD_TAG';
export const ADD_TAG_SUCCESS = 'ADD_TAG_SUCCESS';
export const ADD_LIST_TAG = 'ADD_LIST_TAG';
export const ADD_LIST_TAG_SUCCESS = 'ADD_LIST_TAG_SUCCESS';
export const DELETE_TAG = 'DELETE_TAG';
export const DELETE_TAG_SUCCESS = 'DELETE_TAG_SUCCESS';
export const DELETE_ALL_TAG = 'DELETE_ALL_TAG';
export const DELETE_ALL_TAG_SUCCESS = 'DELETE_ALL_TAG_SUCCESS';
export const UPDATE_TAG = 'UPDATE_TAG';
export const UPDATE_TAG_SUCCESS = 'UPDATE_TAG_SUCCESS';
export const SELECT_TAG = 'SELECT_TAG';
export const SELECT_TAG_SUCCESS = 'SELECT_TAG_SUCCESS';
export const RESET_TAG = 'RESET_TAG';
export const RESET_TAG_SUCCESS = 'RESET_TAG_SUCCESS';

/**
 * Implementation of all actions that we are handle
 */
export class Start implements Action {
  readonly type = START_APP;

  constructor() {
  }
}

export class StartSuccess implements Action {
  readonly type = START_APP_SUCCESS;

  constructor(public state: TagState) {
  }
}

export class Play implements Action {
  readonly type = PLAY_DISPLAY;

  constructor() {
  }
}

export class PlaySuccess implements Action {
  readonly type = PLAY_DISPLAY_SUCCESS;

  constructor() {
  }
}

export class Pause implements Action {
  readonly type = PAUSE_DISPLAY;

  constructor() {
  }
}

export class PauseSuccess implements Action {
  readonly type = PAUSE_DISPLAY_SUCCESS;

  constructor() {
  }
}

export class AddTag implements Action {
  readonly type = ADD_TAG;
  public id: number;

  constructor(public tag: Tag) {
    this.id = Math.floor(Math.random() * 100000000);
  }
}

export class AddTagSuccess implements Action {
  readonly type = ADD_TAG_SUCCESS;

  constructor(public tag: Tag) {
  }
}

export class AddListTag implements Action {
  readonly type = ADD_LIST_TAG;

  constructor(public tags: Tag[]) {
  }
}

export class AddListTagSuccess implements Action {
  readonly type = ADD_LIST_TAG_SUCCESS;

  constructor(public tags: Tag[]) {
  }
}

export class DeleteTag implements Action {
  readonly type = DELETE_TAG;

  constructor(public id: number) {
  }
}

export class DeleteTagSuccess implements Action {
  readonly type = DELETE_TAG_SUCCESS;

  constructor(public id: number) {
  }
}

export class DeleteAllTag implements Action {
  readonly type = DELETE_ALL_TAG;

  constructor() {
  }
}

export class DeleteAllTagSuccess implements Action {
  readonly type = DELETE_ALL_TAG_SUCCESS;

  constructor() {
  }
}

export class UpdateTag implements Action {
  readonly type = UPDATE_TAG;

  constructor(public id: number, public tag: Partial<Tag>) {
  }
}

export class UpdateTagSuccess implements Action {
  readonly type = UPDATE_TAG_SUCCESS;

  constructor(public id: number, public tag: Partial<Tag>) {
  }
}

export class SelectTag implements Action {
  readonly type = SELECT_TAG;

  constructor(public id: number) {
  }
}

export class SelectTagSuccess implements Action {
  readonly type = SELECT_TAG_SUCCESS;

  constructor(public id: number) {
  }
}

export class ResetTag implements Action {
  readonly type = RESET_TAG;

  constructor() {
  }
}

export class ResetTagSuccess implements Action {
  readonly type = RESET_TAG_SUCCESS;

  constructor() {
  }
}

export type Actions =
  Start
  | StartSuccess
  | Play
  | PlaySuccess
  | Pause
  | PauseSuccess
  | AddTag
  | AddTagSuccess
  | AddListTag
  | AddListTagSuccess
  | DeleteTag
  | DeleteTagSuccess
  | DeleteAllTag
  | DeleteAllTagSuccess
  | UpdateTag
  | UpdateTagSuccess
  | SelectTag
  | SelectTagSuccess
  | ResetTag
  | ResetTagSuccess ;
