import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { FlyingPokemon } from "../model/flying.pokemon";

export class FlyingPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new FlyingPokemon(name);
    }
}