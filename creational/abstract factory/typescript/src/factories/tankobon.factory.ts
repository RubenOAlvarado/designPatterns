import { Edition } from "../interface/edition.interface";
import { MangaFactory } from "../interface/mangaFactory.interface";
import { TankobonEdition } from "../model/tankobon/tankobon.edition";

export class TankobonFactory implements MangaFactory {
    createEdition(): Edition {
        return new TankobonEdition();
    }
}