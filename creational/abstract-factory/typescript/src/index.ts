import { KanzenbanFactory } from "./factories/kanzenban.factory";
import { TankobonFactory } from "./factories/tankobon.factory";
import { MangaFactory } from "./interface/mangaFactory.interface";

function createManga(factory: MangaFactory){
  const edition = factory.createEdition();
  const volume = edition.createVolume();

  volume.display();
}

function main(){
  console.log('Creating Dragon Ball manga editions:');
  const tankobonFactory = new TankobonFactory();
  createManga(tankobonFactory);

  const kanzenbanFactory = new KanzenbanFactory();
  createManga(kanzenbanFactory);
}

main();