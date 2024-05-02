import { Edition } from "./edition.interface";

export interface MangaFactory {
    createEdition(): Edition;
}