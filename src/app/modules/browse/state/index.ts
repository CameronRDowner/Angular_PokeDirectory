import * as root from '../../../app.state';
import * as browse from './browse.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBrowseFeatureState = createFeatureSelector<browse.BrowseState>('browse');

export const getSearchList = createSelector(
    getBrowseFeatureState,
    state => state.searchList
);
export const getSearchTerm = createSelector(
    getBrowseFeatureState,
    state => state.searchTerm
);