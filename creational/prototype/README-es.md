## Descripcion
El patrón de diseño Prototype es un patrón de diseño creacional que permite clonar objetos existentes sin hacer que tu código dependa de sus clases concretas. El patrón especifica la clase de objetos a clonar y crea nuevos objetos clonando este prototipo.

## Uso
Utiliza el patrón Prototype cuando:
- tu código no debe depender de las clases concretas de los objetos que necesitas clonar.
- quieres reducir el número de subclases que solo difieren en la forma en que inicializan sus respectivos objetos.
- quieres que el código del cliente trabaje con objetos sin conocer sus clases concretas.

## Beneficios
- Puedes clonar objetos sin acoplarlos a sus clases concretas.
- Puedes deshacerte del código de inicialización repetido a favor de clonar prototipos preconstruidos.
- Puedes producir objetos complejos de manera más conveniente.

## Desventajas
- Clonar objetos complejos que tienen referencias circulares puede ser muy complicado.

## Ejemplo
```typescript
const prototype1 = new ConcretePrototype1();
const clonedPrototype1 = prototype1.clone();
clonedPrototype1.usefulFunction(); // Output: The result of the Prototype1

const prototype2 = new ConcretePrototype2();
const clonedPrototype2 = prototype2.clone();
clonedPrototype2.usefulFunction(); // Output: The result of the Prototype2
```

## Relaciones con otros patrones
- Prototype puede ayudar cuando necesitas guardar copias de los productos de la fábrica para su uso futuro.
- Puedes usar Prototype junto con Factory Method para que las subclases de las clases de fábrica devuelvan una instancia de una subclase de la clase de producto.
- Puedes usar Prototype junto con Abstract Factory. En este caso, Abstract Factory se puede utilizar para crear prototipos de productos, que se pueden clonar en lugar de crear nuevas instancias.
- Puedes usar Prototype junto con Builder. El patrón Prototype se puede utilizar para clonar los productos del constructor, que es una alternativa a crear una nueva instancia.
- Puedes usar Prototype junto con Singleton. El patrón Singleton se puede implementar clonando un prototipo en lugar de crear una nueva instancia.
- Puedes usar Prototype junto con Composite. Esto te permite clonar estructuras complejas en lugar de reconstruirlas desde cero.
- Puedes usar Prototype junto con Decorator. Esto te permite clonar el objeto original y luego extenderlo con nuevas funcionalidades.
- Puedes usar Prototype junto con Observer. El patrón se puede utilizar para clonar el sujeto y luego adjuntar el sujeto clonado al observador.
- Puedes usar Prototype junto con State. El patrón se puede utilizar para clonar el contexto y luego cambiar a un nuevo estado.
- Puedes usar Prototype junto con Strategy. El patrón se puede utilizar para clonar el contexto y luego reemplazar la estrategia por una nueva.
- Puedes usar Prototype junto con Visitor. El patrón se puede utilizar para clonar el sujeto y luego permitir que el visitante opere en el sujeto clonado.

## Diagrama de clases
![Prototype](https://upload.wikimedia.org/wikipedia/commons/1/14/Prototype_UML.svg)

## Aplicabilidad
Utiliza el patrón Prototype cuando:
- tu código no debe depender de las clases concretas de los objetos que necesitas clonar.
- quieres reducir el número de subclases que solo difieren en la forma en que inicializan sus respectivos objetos.
- quieres que el código del cliente trabaje con objetos sin conocer sus clases concretas.
