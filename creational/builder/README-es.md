## Descripcion
Patrón de diseño Builder es un patrón de diseño creacional que permite construir objetos complejos paso a paso. El patrón permite producir diferentes tipos y representaciones de un objeto utilizando el mismo código de construcción.

## Implementación
En este ejemplo, tenemos una clase `Eve`. Ella es la protagonista femenina de un nuevo juego llamado `Stellar Blade` y tiene una clase `Builder` que te ayuda a crear su personaje. Ella puede tener diferentes tipos de `Cabello`, `Ojos`, `Piel`, `Ropa` y `Armas`. La clase `Director` es responsable del proceso de construcción, mientras que la clase `Builder` proporciona la implementación para los pasos de construcción. No he jugado el juego aun, asi que perdonen si me equivoco en algo.

## Uso
Utiliza el patrón Builder cuando:
- quieres construir objetos complejos paso a paso.
- quieres que el código de construcción sea independiente de las partes que componen el objeto y de cómo se ensamblan.
- quieres que el código de construcción sea reutilizable para construir diferentes representaciones de un objeto.

## Beneficios
- Permite construir objetos complejos paso a paso.
- Permite producir diferentes tipos y representaciones de un objeto utilizando el mismo código de construcción.
- Permite reutilizar el código de construcción para construir diferentes representaciones de un objeto.

## Desventajas
- Puede requerir la creación de muchas subclases para implementar el patrón.
- Puede ser difícil de mantener si se crean muchas subclases.

## Ejemplo
En este ejemplo, se crea una clase `Pizza` que tiene un método `getPizza` que devuelve un objeto de tipo `Pizza`. Se tienen subclases de la clase `Pizza`, como `HawaiianPizza` y `PepperoniPizza`, que implementan el método `getPizza` para devolver objetos de tipo `HawaiianPizza` y `PepperoniPizza` respectivamente.

## Relaciones con otros patrones
- **Abstract Factory**: Builder se puede utilizar para construir productos complejos que se crean a partir de productos simples creados por un Abstract Factory.
- **Composite**: Builder se puede utilizar para construir árboles de objetos Composite.
- **Prototype**: Builder se puede utilizar para construir prototipos de objetos.
- **Template Method**: Builder se puede utilizar para construir objetos utilizando un Template Method.

## Diagrama de clases
![Diagrama de clases](https://upload.wikimedia.org/wikipedia/commons/f/f3/Builder_UML_class_diagram.svg)

## Aplicabilidad
Utiliza el patrón Builder cuando:
- quieres construir objetos complejos paso a paso.
- quieres que el código de construcción sea independiente de las partes que componen el objeto y de cómo se ensamblan.
- quieres que el código de construcción sea reutilizable para construir diferentes representaciones de un objeto.
- quieres que el código de construcción sea independiente de los objetos que se construyen.