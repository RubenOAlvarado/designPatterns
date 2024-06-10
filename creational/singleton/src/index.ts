import { Emperor } from "./classes/emperor";

function main() {
  console.log('Singleton Pattern');
  console.log('-----------------');
  console.log('Creating an Emperor instance...');
  const instance1 = Emperor.getInstance();
  console.log('Creating another Emperor instance...');
  const instance2 = Emperor.getInstance();
  console.log('Instance 1 is equal to instance 2?', instance1 === instance2);
  console.log('Instance 1 is equal to Emperor instance?', instance1 === Emperor.getInstance());
  console.log('Instance 1 is equal to Emperor instance?', instance2 === Emperor.getInstance());
  console.log('There can be only one emperor in the Galaxy!');
}

main();