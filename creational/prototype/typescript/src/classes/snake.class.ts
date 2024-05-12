import { Soldier } from "./soldier.class";

export class Snake implements Soldier {
    constructor(public name: string, public rank: string, public codename: string) {}

    clone(): Soldier {
        return new Snake(this.name, this.rank, this.codename);
    }

    displayInfo(): void {
        console.log(`Soldier: ${this.name}, Rank: ${this.rank}, Codename: ${this.codename}`);
    }
}