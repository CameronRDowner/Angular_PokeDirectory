import * as root from '../../../app.state';
import * as browse from './browse.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBrowseFeatureState = createFeatureSelector<browse.BrowseState>('browse');

export const getListToSearch = createSelector(
    getBrowseFeatureState,
    state => state.listToSearch
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