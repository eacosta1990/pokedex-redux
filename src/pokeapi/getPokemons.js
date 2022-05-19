import { axiosInstance } from "./config"


const getPokemons = (limit = 151) => {
    return axiosInstance.get(`/pokemon?limit=${limit}`)
        .then((response) => {
            const pokemonList = response.data.results;
            return Promise.all(
                pokemonList.map((pokemon) => axiosInstance.get(pokemon.url))
            );
        });
}

const getPokemonWithDetails = () => {
    return getPokemons()
        .then((response) => {
            return response.map((resp) => resp.data);
        });
}

export { getPokemons, getPokemonWithDetails };