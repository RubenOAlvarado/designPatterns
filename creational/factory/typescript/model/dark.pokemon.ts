import { Pokemon } from "../interfaces/pokemon.interface";

export class DarkPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'dark';
    }

    attack(): void {
        console.log(`${this.name} attacks with bite!`);
    }
}