import { ElectricPokemonFactory } from './factories/electric.pokemon.factory';
import { FairyPokemonFactory } from './factories/fairy.pokemon.factory';
import { FirePokemonFactory } from './factories/fire.pokemon.factory';
import { InsectPokemonFactory } from './factories/insect.pokemon.factory';
import { WaterPokemonFactory } from './factories/water.pokemon.factory';
import { PokemonFactory } from './interfaces/pokemon.factory.interface';

function createFirePokemons(){
    const fireFactory: PokemonFactory = new FirePokemonFactory();
    const charmander = fireFactory.createPokemon('Charmander');
    const charmeleon = fireFactory.createPokemon('Charmeleon');
    const charizard = fireFactory.createPokemon('Charizard');
    console.log(charmander);
    console.log(charmeleon);
    console.log(charizard);
}

function createInsectPokemons(){
    const insectFactory: PokemonFactory = new InsectPokemonFactory();
    const caterpie = insectFactory.createPokemon('Caterpie');
    const metapod = insectFactory.createPokemon('Metapod');
    const butterfree = insectFactory.createPokemon('Butterfree');
    console.log(caterpie);
    console.log(metapod);
    console.log(butterfree);
}

function createFairyPokemons(){
    const fairyFactory: PokemonFactory = new FairyPokemonFactory();
    const clefairy = fairyFactory.createPokemon('Clefairy');
    const clefable = fairyFactory.createPokemon('Clefable');
    console.log(clefairy);
    console.log(clefable);
}

function createElectricPokemons(){
    const electricFactory: PokemonFactory = new ElectricPokemonFactory();
    const pikachu = electricFactory.createPokemon('Pikachu');
    const raichu = electricFactory.createPokemon('Raichu');
    console.log(pikachu);
    console.log(raichu);
}

function createWaterPokemons(){
    const waterFactory: PokemonFactory = new WaterPokemonFactory();
    const squirtle = waterFactory.createPokemon('Squirtle');
    const wartortle = waterFactory.createPokemon('Wartortle');
    const blastoise = waterFactory.createPokemon('Blastoise');
    console.log(squirtle);
    console.log(wartortle);
    console.log(blastoise);
}

function main(){
    createFirePokemons();
    createInsectPokemons();
    createFairyPokemons();
    createElectricPokemons();
    createWaterPokemons();
}

main();