import { Snake } from "./classes/snake.class";

function main(){
    console.log('First Soldier:');
    const bigBoss = new Snake('Big Boss', 'Commander', 'Naked Snake');
    bigBoss.displayInfo();
    console.log('Le enfant teribles:');
    console.log('Cloning Big Boss...');
    const solidSnake = bigBoss.clone();
    solidSnake.codename = 'Solid Snake';
    solidSnake.displayInfo();
    console.log('Cloning Big Boss...');
    const liquidSnake = bigBoss.clone();
    liquidSnake.codename = 'Liquid Snake';
    liquidSnake.displayInfo();
    console.log('Cloning Big Boss...');
    const solidusSnake = bigBoss.clone();
    solidusSnake.codename = 'Solidus Snake';
    solidusSnake.displayInfo();

    console.log('Big Boss clone:');
    const venomSnake = bigBoss.clone();
    venomSnake.codename = 'Venom Snake';
    venomSnake.displayInfo();
}

main();