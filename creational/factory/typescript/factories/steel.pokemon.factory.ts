import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { RockPokemon } from "../model/rock.pokemon";

export class RockPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new RockPokemon(name);
    }
}