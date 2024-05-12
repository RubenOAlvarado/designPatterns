## Description
Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

## Implementation
In this example, we have a `Eve` class. She is the female protagonist of a brand new game called `Stelllar Blade` and she has a `Builder` class that helps you to create her character. She can haave different types of `Hair`, `Eyes`, `Skin`, `Clothes`, and `Weapons`. The `Director` class is responsible for the construction process, while the `Builder` class provides the implementation for the construction steps. I haven't played the game yet, so forgive me if I get something wrong. 

## When to use
Use the Builder pattern when you want to construct complex objects step by step and you want to produce different types and representations of an object using the same construction code.

## Benefits
- You can construct objects step by step, defer construction steps or run steps recursively.
- You can reuse the same construction code to produce different types and representations of an object.
- Single Responsibility Principle. You can separate the construction code from the object representation code.
- Open/Closed Principle. You can introduce new types of objects into the program without breaking existing client code.

## Drawbacks
- The code may become more complicated since you need to introduce a lot of new classes to implement the pattern.

## Example
```typescript
const director = new Director();

const builder1 = new ConcreteBuilder1();
director.construct(builder1);
const product1 = builder1.getProduct();
product1.listParts(); // Output: PartA1, PartB1

const builder2 = new ConcreteBuilder2();
director.construct(builder2);
const product2 = builder2.getProduct();
product2.listParts(); // Output: PartX2, PartY2
```

## Relations with Other Patterns
- Builder focuses on constructing complex objects step by step. Abstract Factory specializes in creating families of related objects. Abstract Factory returns the product immediately, whereas Builder lets you run some additional construction steps before fetching the product.
- You can use Builder along with Bridge. In this case, the director class plays the role of the abstraction, and the builders act as implementations.
- You can use Builder along with Prototype. The director class can create a complex object using a prototype instead of constructing it from scratch.
- You can use Builder along with Composite. This lets you construct complex objects as a tree structure.
- You can use Builder along with Decorator. This lets you construct a complex object and then decorate it with additional features.
- You can use Builder along with Chain of Responsibility. In this case, the pattern lets you decide which class will be the next handler at runtime.
- You can use Builder along with Strategy. This allows you to swap strategies inside the context object.
- You can use Builder along with Visitor. This lets you change the executing algorithm of an element without changing the element itself.

## Class Diagram
![Builder](https://media.geeksforgeeks.org/wp-content/uploads/uml-of-builedr.jpg)

## Applicability
Use the Builder pattern when:
- you want to construct complex objects step by step.
- you want to produce different types and representations of an object using the same construction code.
- you want to construct an object using a step-by-step approach, defer construction steps or run steps recursively.

## Real World Examples