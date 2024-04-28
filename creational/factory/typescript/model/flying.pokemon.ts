import { Pokemon } from "../interfaces/pokemon.interface";

export class FlyingPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'flying';
    }

    attack(): void {
        console.log(`${this.name} attacks with gust!`);
    }
}