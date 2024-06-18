import { Gen1Adapter } from "./adapters/gen1.adapter";
import { Gen2Adapter } from "./adapters/gen2.adapter";
import { Pokemon } from "./interfaces/pokemon.interface";
import { Gen1Service } from "./services/gen1.service";
import { Gen2Service } from "./services/gen2.service";

const displayPokemon = (pokemon: Pokemon) => {
  console.log(`Pokemon: ${pokemon.name} - Type: ${pokemon.type}`);
}

function main(){
  const gen1Service = new Gen1Service();
  const gen2Service = new Gen2Service();

  console.log('Mapping Gen1 Pokemons');
  const gen1Pokemons = gen1Service.getPokemon().map(pokemon => new Gen1Adapter(pokemon));
  console.log('Mapping Gen2 Pokemons');
  const gen2Pokemons = gen2Service.getPokemon().map(pokemon => new Gen2Adapter(pokemon));
  console.log('Merging Pokemons');
  const allPokemons = [...gen1Pokemons, ...gen2Pokemons];
  console.log('Displaying Pokemons');
  allPokemons.map(pokemon => displayPokemon(pokemon));
}

main();