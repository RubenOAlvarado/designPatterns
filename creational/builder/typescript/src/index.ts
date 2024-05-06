import { EveBuilder } from "./builders/eve.builder.class";
import { EveCreator } from "./classes/eve.creator.class";

function main() {
    const builder = new EveBuilder();
    const eveCreator = new EveCreator(builder);

    console.log('Creating default Eve');
    const defaultEve = eveCreator.createDefaultEve();
    console.log(defaultEve);

    console.log('Creating armored and with gun Eve');
    const customEve = eveCreator.createEve('short', 'green', true, 'armor', 'gun', 2);
    console.log(customEve);

    console.log('Creating bunny suit Eve');
    const customEve2 = eveCreator.createEve('long', 'red', false, 'bunny suit', 'sword', 1);
    console.log(customEve2);

    console.log('Creating sailor suit Eve');
    const customEve3 = eveCreator.createEve('long', 'blue', false, 'sailor suit', 'sword', 1);
    console.log(customEve3);
}

main();