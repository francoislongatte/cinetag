import {Tag} from '../../share/models/tag';

export interface TagState {
  'config': {
    'play': boolean,
    'speed': number
  },
  tagLine: Tag[];
}

export const initialState: TagState = {
  config: {
    play: true,
    speed: 2500
  },
  tagLine: [
    {
      id: 38383773,
      image: 'http://pngimg.com/uploads/filmstrip/filmstrip_PNG142.png',
      message: 'Ne rester pas simple spectacteur !',
      selected: false
    }
  ]
};


export function tagReducer(state: TagState = initialState, action) {
  switch (action.type) {
    case 'START_APP_SUCCESS':
      return action.state;
    case 'PLAY_DISPLAY':
      return {
        ...state,
        config: {
          ...state.config,
          play: true
        }
      };
    case 'PAUSE_DISPLAY':
      return {
        ...state,
        config: {
          ...state.config,
          play: false
        }
      };
    case 'ADD_TAG_SUCCESS':
      return {
        ...state,
        tagLine: [
          ...state.tagLine,
          {
            id: action.tag.id,
            image: action.tag.image,
            message: action.tag.message,
            selected: action.tag.selected
          }
        ]
      };
    case 'ADD_LIST_TAG_SUCCESS':
      return {
        ...state,
        tagLine: [
          ...action.tags
        ]
      };
    case 'DELETE_TAG_SUCCESS':
      return {
        ...state,
        tagLine: state.tagLine.filter(tag => action.id !== tag.id)
      };
    case 'DELETE_ALL_TAG_SUCCESS':
      return {
        ...state,
        tagLine: []
      };
    case 'UPDATE_TAG_SUCCESS':
      return {
        ...state,
        tagLine: [
          ...state.tagLine.map(tag => {
            if (action.id === tag.id) {
              tag.id = action.tag.id;
              tag.selected = action.tag.selected;
              tag.message = action.tag.message;
              tag.image = action.tag.image;
            }
            return tag;
          })]
      };
    case 'RESET_TAG_SUCCESS':
      return {
        ...state,
        tagLine: state.tagLine.map(tag => {
          return {
            ...tag,
            selected: false
          };
        })
      };
    case 'SELECT_TAG_SUCCESS':
      return {
        ...state,
        tagLine: state.tagLine.map(tag => {
          return {
            ...tag,
            selected: tag.id === action.id ? !tag.selected : false
          };
        })
      };
    default:
      return state;
  }
}
