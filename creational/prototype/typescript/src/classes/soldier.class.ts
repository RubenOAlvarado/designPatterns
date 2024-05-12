import { Cloneable } from "../interfaces/cloneable.interface";

export class Soldier implements Cloneable {
    constructor(public name: string, public rank: string, public codename: string) {}

    clone(): Soldier {
        return new Soldier(this.name, this.rank, this.codename);
    }

    displayInfo(): void {
        console.log(`Soldier: ${this.name}, Rank: ${this.rank}, Codename: ${this.codename}`);
    }
}