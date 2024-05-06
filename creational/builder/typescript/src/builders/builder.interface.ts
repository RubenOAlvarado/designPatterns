import { Eve } from "../classes/eve.class";

export interface Builder {
    setHairLong(hairLong: string): void;
    setEyesColor(eyesColor: string): void;
    setHasGlasses(hasGlasses: boolean): void;
    setOutfit(outfit: string): void;
    setWeapon(weapon: string): void;
    setLevel(level: number): void;
    build(): void;
    getEve(): Eve;
    reset(): Eve;
}