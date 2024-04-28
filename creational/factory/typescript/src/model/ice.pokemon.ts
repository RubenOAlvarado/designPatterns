import { Pokemon } from "../interfaces/pokemon.interface";

export class IcePokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'ice';
    }

    attack(): void {
        console.log(`${this.name} attacks with ice beam!`);
    }
}