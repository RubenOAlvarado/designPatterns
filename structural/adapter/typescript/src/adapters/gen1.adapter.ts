import { Gen1 } from "../interfaces/gen1.interface";
import { Pokemon } from "../interfaces/pokemon.interface";

export class Gen1Adapter implements Pokemon {
    constructor(private gen1: Gen1) { }

    get id(): number {
        return this.gen1.id;
    }

    get name(): string {
        return this.gen1.name;
    }

    get type(): string {
        return this.gen1.type;
    }
}