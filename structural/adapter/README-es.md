## Descripción
El patrón de adaptador es un patrón de diseño estructural que permite objetos con interfaces incompatibles colaborar entre sí. El adaptador actúa como un intermediario entre dos objetos, encapsulando la lógica necesaria para que puedan comunicarse.

## Implementación
En este ejemplo, usamos generaciones de pokémon como ejemplo. Tenemos 3 interfaces: PokemonGen1, PokemonGen2 y Pokemon, que gestionan los pokémon en general. Tenemos clases adaptadoras que adaptan las interfaces a la interfaz Pokemon. El adaptador PokemonGen1 adapta la interfaz PokemonGen1 a la interfaz Pokemon, y el adaptador PokemonGen2 adapta la interfaz PokemonGen2 a la interfaz Pokemon. Mostrando los pokémon de cada generación, podemos ver que el adaptador PokemonGen1 adapta la interfaz PokemonGen1 a la interfaz Pokemon, mientras que el adaptador PokemonGen2 adapta la interfaz PokemonGen2 a la interfaz Pokemon.

## Cuándo utilizar
Utiliza el patrón de adaptador cuando quieras utilizar una clase existente, pero su interfaz no sea compatible con el resto de tu código.

## Beneficios
- Principio de responsabilidad única. Puedes separar la interfaz o el código de conversión de datos de la lógica principal del programa.
- Principio abierto/cerrado. Puedes introducir nuevos tipos de adaptadores sin romper el código cliente existente, siempre y cuando trabajen con los adaptadores a través de la interfaz del cliente.

## Desventajas
- La complejidad general del código aumenta porque necesitas introducir un conjunto de nuevas interfaces y clases.

## Ejemplo
```typescript
const pokemonGen1 = new PokemonGen1Adapter();
const pokemonGen2 = new PokemonGen2Adapter();
pokemonGen1.listPokemons(); // Salida: Pikachu, Bulbasaur, Charmander, Squirtle
pokemonGen2.listPokemons(); // Salida: Chikorita, Cyndaquil, Totodile
```

## Relaciones con otros patrones
- El adaptador es similar al patrón Bridge. Sin embargo, el patrón Bridge se utiliza de antemano para permitirte construir el sistema a partir de componentes, mientras que el patrón Adaptador se utiliza después de que el sistema está diseñado para hacer que los componentes funcionen juntos.
- El adaptador es similar al patrón Decorator. Sin embargo, el patrón Decorator se utiliza para añadir nuevas funcionalidades a un objeto, mientras que el patrón Adaptador se utiliza para hacer que dos interfaces existentes funcionen juntas.
- El adaptador es similar al patrón Proxy. Sin embargo, el patrón Proxy se utiliza para añadir un nivel de indirección a los objetos, mientras que el patrón Adaptador se utiliza para hacer que dos interfaces existentes funcionen juntas.

## Diagrama de clases
![Adapter](https://reactiveprogramming.io/books/patterns/img/patterns-articles/adapter-diagram.png)

## Aplicabilidad
Utiliza el patrón de adaptador cuando:
- quieras utilizar una clase existente, y su interfaz no sea compatible con el resto de tu código.
- quieras crear una clase reutilizable que coopere con clases no relacionadas o imprevistas, es decir, clases que no necesariamente tengan interfaces compatibles.
- necesites utilizar varias subclases existentes, pero sea impráctico adaptar su interfaz mediante la creación de subclases para cada una. Un adaptador de objeto puede adaptar la interfaz de su clase padre.
