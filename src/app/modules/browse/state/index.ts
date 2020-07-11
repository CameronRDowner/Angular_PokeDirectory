import * as root from '../../../app.state';
import * as browse from './browse.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBrowseFeatureState = createFeatureSelector<browse.BrowseState>('browse');

export const getCurrentList = createSelector(
    getBrowseFeatureState,
    state => state.currentList
);
export const getSearchTerm = createSelector(
    getBrowseFeatureState,
    state => state.searchTerm
);
export const getAllPokemon = createSelector(
    getBrowseFeatureState,
    state => state.allPokemon
);
export const getResultsInView = createSelector(
    getBrowseFeatureState,
    state => state.resultsInView
);
export const getStartOffset = createSelector(
    getBrowseFeatureState,
    state => state.startOffset
)
export const getEndOffset = createSelector(
    getBrowseFeatureState,
    state => state.endOffset
)
export const getMaxResultsPerPage = createSelector(
    getBrowseFeatureState,
    state => state.maxResultsPerPage
)
export const getCurrentPage = createSelector(
    getBrowseFeatureState,
    state => state.currentPage
)
export const getTotalPages = createSelector(
    getBrowseFeatureState,
    state => state.totalPages
)
export const getAlertModalVisible = createSelector(
    getBrowseFeatureState,
    state => state.alertModalVisible
)
export const getAlertModalMessage = createSelector(
    getBrowseFeatureState,
    state => state.alertModalMessage
)