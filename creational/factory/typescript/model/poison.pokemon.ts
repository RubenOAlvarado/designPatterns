import { Pokemon } from "../interfaces/pokemon.interface";

export class PoisonPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'poison';
    }

    attack(): void {
        console.log(`${this.name} attacks with poison sting!`);
    }
}