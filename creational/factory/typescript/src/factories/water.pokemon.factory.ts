import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { WaterPokemon } from '../model/water.pokemon';

export class WaterPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new WaterPokemon(name);
    }
}