## Description
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Implementation
In this example, we have a `Singleton` class that has a private static field `instance` that holds the singleton instance of the class. The class has a private constructor and a static method `getInstance` that returns the singleton instance of the class.

## When to use
Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.

## Benefits
- You can be sure that a class has only a single instance.
- You gain a global access point to that instance.
- The singleton object is initialized only when it’s requested for the first time.

## Drawbacks
- Violates the Single Responsibility Principle. The pattern solves two problems at the time.
- The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.

## Example
```typescript
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // Output: true
```

## Relations with Other Patterns
- Singleton is often used in conjunction with other patterns. It’s usually responsible for the single instance of the other patterns.
- You can use Singleton along with Abstract Factory, Builder, Prototype, and Bridge.
- Singleton is related to the Monostate pattern, which is a way to ensure that all instances of a class have the same state.
- You can use Singleton along with Facade to provide a single interface to a complex subsystem.
- You can use Singleton along with Flyweight to share the same instance of a class among multiple contexts.
- You can use Singleton along with Memento to save the state of a single object.
- You can use Singleton along with Observer when you only need one observer to subscribe to a subject.
- You can use Singleton along with State to let the context have a single state object.
- You can use Singleton along with Strategy to let the context have a single strategy object.
- You can use Singleton along with Template Method to let the subclass have a single template method object.
- You can use Singleton along with Visitor to let the visitor have a single visitor object.

## Class Diagram
![Singleton](https://upload.wikimedia.org/wikipedia/commons/d/dc/Singleton_pattern_uml.png)

## Applicability
Use the Singleton pattern when:
- there must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
- when the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.

## Real World Examples