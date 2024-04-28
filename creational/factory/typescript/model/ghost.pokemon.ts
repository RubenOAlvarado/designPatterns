import { Pokemon } from "../interfaces/pokemon.interface";

export class GhostPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'ghost';
    }

    attack(): void {
        console.log(`${this.name} attacks with shadow ball!`);
    }
}