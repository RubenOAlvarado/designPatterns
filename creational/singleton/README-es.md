## Descripción
El patrón de diseño Singleton es un patrón de diseño creacional que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.

## Implementación
En este ejemplo, utilizamos al emperador Palpatine de Star Wars como Singleton. Solo puede haber un emperador en la galaxia. El señor oscuro de los Sith es un Singleton. El método `getInstance` devuelve la misma instancia del emperador cada vez que se llama.

## Uso
Utiliza el patrón Singleton cuando una clase en tu programa deba tener una única instancia disponible para todos los clientes; por ejemplo, un único objeto de base de datos compartido por diferentes partes del programa.

## Beneficios
- Puedes estar seguro de que una clase tiene solo una instancia.
- Obtienes un punto de acceso global a esa instancia.
- El objeto singleton se inicializa solo cuando se solicita por primera vez.

## Desventajas
- Viola el Principio de Responsabilidad Única. El patrón resuelve dos problemas al mismo tiempo.
- El patrón Singleton puede enmascarar un mal diseño, por ejemplo, cuando los componentes del programa saben demasiado unos de otros.

## Ejemplo
```typescript
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // Salida: true
```

## Relaciones con Otros Patrones
- Singleton se usa a menudo en conjunto con otros patrones. Por lo general, es responsable de la única instancia de los otros patrones.
- Puedes usar Singleton junto con Abstract Factory, Builder, Prototype y Bridge.
- Singleton está relacionado con el patrón Monostate, que es una forma de garantizar que todas las instancias de una clase tengan el mismo estado.
- Puedes usar Singleton junto con Facade para proporcionar una única interfaz a un subsistema complejo.
- Puedes usar Singleton junto con Flyweight para compartir la misma instancia de una clase entre múltiples contextos.
- Puedes usar Singleton junto con Memento para guardar el estado de un solo objeto.
- Puedes usar Singleton junto con Observer cuando solo necesitas que un observador se suscriba a un sujeto.
- Puedes usar Singleton junto con State para permitir que el contexto tenga un solo objeto de estado.
- Puedes usar Singleton junto con Strategy para permitir que el contexto tenga un solo objeto de estrategia.
- Puedes usar Singleton junto con Template Method para permitir que la subclase tenga un solo objeto de método de plantilla.
- Puedes usar Singleton junto con Visitor para permitir que el visitante tenga un solo objeto de visitante.

## Diagrama de Clase
![Singleton](https://upload.wikimedia.org/wikipedia/commons/d/dc/Singleton_pattern_uml.png)

## Aplicabilidad
Utiliza el patrón Singleton cuando:
- debe haber exactamente una instancia de una clase, y debe ser accesible para los clientes desde un punto de acceso bien conocido.
- la única instancia debe ser extensible mediante la creación de subclases, y los clientes deben poder utilizar una instancia extendida sin modificar su código.