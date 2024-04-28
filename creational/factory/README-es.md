## Descripcion
El patrón de diseño Factory Method define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar. Permite a una clase diferir la instanciación a subclases.

## Uso
Cuando una clase no puede anticipar la clase de objetos que debe crear. Cuando una clase quiere que sus subclases especifiquen los objetos que creará. Cuando las clases delegan la responsabilidad de la creación de objetos a una de las subclases, evitando acoplamientos fuertes.

## Beneficios
- Evita acoplamientos fuertes entre la clase y los objetos que crea.
- Simplifica la creación de objetos.
- Facilita la adición de nuevos productos al sistema.

## Desventajas
- Puede requerir la creación de muchas subclases para implementar el patrón.
- Puede ser difícil de mantener si se crean muchas subclases.

## Ejemplo
En este ejemplo, se crea una clase `Creator` que define un método `factoryMethod` que crea un objeto de tipo `Product`. Las subclases de `Creator` implementan el método `factoryMethod` para crear diferentes tipos de productos.

## Relaciones con otros patrones
- **Abstract Factory**: Factory Method es una forma específica de implementar el patrón Abstract Factory.
- **Singleton**: Factory Method puede ser utilizado para crear objetos Singleton.
- **Template Method**: Factory Method es un Template Method especializado en la creación de objetos.

## Diagrama de clases
![Diagrama de clases](https://i.stack.imgur.com/B9hpn.png)

## Aplicabilidad
Utiliza el patrón Factory Method cuando:
- una clase no puede anticipar la clase de objetos que debe crear.
- una clase quiere que sus subclases especifiquen los objetos que creará.
- las clases delegan la responsabilidad de la creación de objetos a una de las subclases, evitando acoplamientos fuertes.
