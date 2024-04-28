import { Pokemon } from "../interfaces/pokemon.interface";

export class GroundPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'ground';
    }

    attack(): void {
        console.log(`${this.name} attacks with earthquake!`);
    }
}