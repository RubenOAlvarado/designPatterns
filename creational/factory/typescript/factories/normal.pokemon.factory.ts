import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { NormalPokemon } from '../model/normal.pokemon';

export class NormalPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new NormalPokemon(name);
    }
}