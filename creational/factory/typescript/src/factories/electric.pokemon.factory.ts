import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { ElectricPokemon } from "../model/electric.pokemon";

export class ElectricPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new ElectricPokemon(name);
    }
}