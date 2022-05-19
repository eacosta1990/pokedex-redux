import { FETCH_POKEMON, SET_POKEMON } from "./type";

const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

const fetchPokemon = () => ({
    type: FETCH_POKEMON
});

export { setPokemon, fetchPokemon };