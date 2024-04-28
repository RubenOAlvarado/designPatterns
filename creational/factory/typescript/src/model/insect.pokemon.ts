import { Pokemon } from "../interfaces/pokemon.interface";

export class InsectPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'insect';
    }

    attack(): void {
        console.log(`${this.name} attacks with string shot!`);
    }
}