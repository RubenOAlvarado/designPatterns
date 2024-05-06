import { Eve } from "../classes/eve.class";
import { Builder } from "./builder.interface";

export class EveBuilder implements Builder {
    private eve: Eve;

    constructor() {
        this.reset();
    }

    setHairLong(hairLong: string): void {
        this.eve.hairLong = hairLong;
    }

    setEyesColor(eyesColor: string): void {
        this.eve.eyesColor = eyesColor;
    }

    setHasGlasses(hasGlasses: boolean): void {
        this.eve.hasGlasses = hasGlasses;
    }

    setOutfit(outfit: string): void {
        this.eve.outfit = outfit;
    }

    setWeapon(weapon: string): void {
        this.eve.weapon = weapon;
    }

    setLevel(level: number): void {
        this.eve.level = level;
    }

    build(): void {
        console.log('Eve has been built');
    }

    getEve(): Eve {
        return this.eve;
    }

    reset(): Eve {
        this.eve = new Eve('long', 'blue', false, 'skin suit', 'sword', 1);
        return this.eve;
    }
}