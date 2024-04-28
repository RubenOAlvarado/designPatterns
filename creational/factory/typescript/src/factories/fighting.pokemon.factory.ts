import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { FightingPokemon } from '../model/fighting.pokemon';

export class FightingPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new FightingPokemon(name);
    }
}