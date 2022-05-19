import { getPokemons } from "../pokeapi/getPokemons";
import { SET_POKEMON } from "./type";

const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

const getPokemonWithDetails = () => (dispatch) => {
    return getPokemons()
        .then((response) => {
            const pokemonDetails = response.map((resp) => resp.data);
            dispatch(setPokemon(pokemonDetails));
        });

}

export { setPokemon, getPokemonWithDetails };