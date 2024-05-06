import { Builder } from "../builders/builder.interface";
import { Eve } from "./eve.class";

export class EveCreator {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    createDefaultEve(): Eve {
        return this.builder.reset();
    }

    createEve(hairLong: string, eyesColor: string, hasGlasses: boolean, outfit: string, weapon: string, level: number): Eve {
        this.builder.setHairLong(hairLong);
        this.builder.setEyesColor(eyesColor);
        this.builder.setHasGlasses(hasGlasses);
        this.builder.setOutfit(outfit);
        this.builder.setWeapon(weapon);
        this.builder.setLevel(level);
        this.builder.build();
        return this.builder.getEve();
    }
}