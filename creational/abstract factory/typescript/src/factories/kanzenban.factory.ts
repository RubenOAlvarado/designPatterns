import { Edition } from "../interface/edition.interface";
import { MangaFactory } from "../interface/mangaFactory.interface";
import { KanzenbanEdition } from "../model/kanzenban/kanzenban.edition";

export class KanzenbanFactory implements MangaFactory {
    createEdition(): Edition {
        return new KanzenbanEdition();
    }
}