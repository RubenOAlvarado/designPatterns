## Description
The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.

## Implementation
In this example, we use pokemon generations as an example. We have 3 interfaces: PokemonGen1, PokemonGen2 and Pokemon, which manage pokemons in general. We have adapter classes that adapt the interfaces to the Pokemon interface. The PokemonGen1Adapter adapts the PokemonGen1 interface to the Pokemon interface, and the PokemonGen2Adapter adapts the PokemonGen2 interface to the Pokemon interface. Displaying the pokemons of each generation, we can see that the PokemonGen1Adapter adapts the PokemonGen1 interface to the Pokemon interface, while the PokemonGen2Adapter adapts the PokemonGen2 interface to the Pokemon interface.

## When to use
Use the Adapter pattern when you want to use some existing class, but its interface isn’t compatible with the rest of your code.

## Benefits
- Single Responsibility Principle. You can separate the interface or data conversion code from the primary business logic of the program.
- Open/Closed Principle. You can introduce new types of adapters without breaking the existing client code, as long as they work with the adapters through the client interface.

## Drawbacks
- The overall complexity of the code increases because you need to introduce a set of new interfaces and classes.

## Example
```typescript
const pokemonGen1 = new PokemonGen1Adapter();
const pokemonGen2 = new PokemonGen2Adapter();
pokemonGen1.listPokemons(); // Output: Pikachu, Bulbasaur, Charmander, Squirtle
pokemonGen2.listPokemons(); // Output: Chikorita, Cyndaquil, Totodile
```

## Relations with Other Patterns
- Adapter is similar to the Bridge pattern. However, the Bridge pattern is used up-front to let you build the system from components, whereas the Adapter pattern is used after the system is designed to make components work together.
- Adapter is similar to the Decorator pattern. However, the Decorator pattern is used to add new functionality to an object, whereas the Adapter pattern is used to make two existing interfaces work together.
- Adapter is similar to the Proxy pattern. However, the Proxy pattern is used to add a level of indirection to objects, whereas the Adapter pattern is used to make two existing interfaces work together.

## Class Diagram
![Adapter](https://reactiveprogramming.io/books/patterns/img/patterns-articles/adapter-diagram.png)

## Applicability
Use the Adapter pattern when:
- you want to use an existing class, and its interface isn’t compatible with the rest of your code.
- you want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don’t necessarily have compatible interfaces.
- you need to use several existing subclasses, but it’s impractical to adapt their interface by subclassing every one. An object adapter can adapt the interface of its parent class.