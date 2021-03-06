import * as root from '../../../app.state';
import * as pokemon from './pokemon.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends root.State {
    pokemon: pokemon.PokemonState;
}

const getPokemonFeatureState = createFeatureSelector<pokemon.PokemonState>('pokemon');

export const getSelectedGame = createSelector(
    getPokemonFeatureState,
    state => state.selectedGame
);
export const getMoveLists = createSelector(
    getPokemonFeatureState,
    state => state.moveLists
);
export const getPokemon = createSelector(
    getPokemonFeatureState,
    state => state.pokemon
);
export const getGamesFeatured = createSelector(
    getPokemonFeatureState,
    state => state.gamesFeatured
);
export const getEncounterLists = createSelector(
    getPokemonFeatureState,
    state => state.encounterLists
);
export const getAbilities = createSelector(
    getPokemonFeatureState,
    state => state.abilities
);
export const getHiddenAbilities = createSelector(
    getPokemonFeatureState,
    state => state.hiddenAbilities
);