import React from "react";
import { HeartTwoTone } from '@ant-design/icons';
import { Image } from 'antd';
import "../styles/pokemon.css";

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="Pokemon-item">
            <div>
                <HeartTwoTone />
            </div>
            <Image
                width={200}
                src={pokemon.sprites.front_default}
            />
            <h2 className="Pokemon-item-info h2"> {pokemon.name}</h2>
            <div>
                {
                    pokemon.types.map((type) =>
                            <p >{type.type.name}</p>
                    )
                }
            </div>
        </div>
    );
}

export { PokemonCard };