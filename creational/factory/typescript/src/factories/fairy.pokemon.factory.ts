import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { FairyPokemon } from "../model/fairy.pokemon";

export class FairyPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new FairyPokemon(name);
    }
}