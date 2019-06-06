import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TagState} from '../reducers/tag.reducers';

export const getTagState = createFeatureSelector<TagState>('TagState');

export const getTags = createSelector(getTagState, state => state && state.tagLine ? state.tagLine : null);

export const getConfig = createSelector(getTagState, state => state && state.config ? state.config : null);
