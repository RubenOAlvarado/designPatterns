import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { GroundPokemon } from '../model/ground.pokemon';

export class GroundPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new GroundPokemon(name);
    }
}