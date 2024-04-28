import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { GrassPokemon } from '../model/grass.pokemon';

export class GrassPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new GrassPokemon(name);
    }
}