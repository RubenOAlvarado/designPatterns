## Description
Factory method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## Implementation
In this example, we have a `VehicleFactory` class that has a `createVehicle` method that returns a `Vehicle` object. We have two subclasses of `VehicleFactory` class, `CarFactory` and `BikeFactory` that override the `createVehicle` method to return a `Car` and `Bike` object respectively.

## When to use
Use the Factory Method pattern when you don’t know beforehand the exact types and dependencies of the objects your code should work with.

## Benefits
- You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

## Drawbacks
- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern.

## Example
```typescript
const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive(); // Output: Driving a car

const bikeFactory = new BikeFactory();
const bike = bikeFactory.createVehicle();
bike.drive(); // Output: Riding a bike
```

## Relations with Other Patterns
- Abstract Factory classes are often based on a set of Factory Methods, but you can also use Prototype to compose the methods on these classes.
- Factory Method is a specialization of Template Method. At the same time, a Factory Method may serve as a step in a large Template Method.
- Factory Methods are usually called within Template Methods.
- Prototype can help when you need to save copies of the factory’s products for future use.
- You can use Factory Method along with Iterator to let collection subclasses return different types of iterators that are compatible with the collections.
- You can use Factory Method along with Memento to capture the internal state of an object at a certain point and save it for future use.
- You can use Factory Method along with Composite to let the subclasses manage the assembly of composite objects while composing them.
- You can use Factory Method along with Decorator to let the subclasses extend the behavior of a wrapped object.
- You can use Factory Method along with Chain of Responsibility. In this case, the pattern lets you decide which class will be the next handler at runtime.
- You can use Factory Method along with Strategy. This allows you to swap strategies inside the context object.
- You can use Factory Method along with Visitor. This lets you change the executing algorithm of an element without changing the element itself.
```

## Class Diagram
![Factory Method](
https://upload.wikimedia.org/wikipedia/commons/3/3f/Factory_Method_UML_class_diagram.svg)

## Applicability
Use the Factory Method pattern when:
- a class can't anticipate the class of objects it must create.
- a class wants its subclasses to specify the objects it creates.
- classes delegate responsibility to one of several helper subclasses, and you want to localize the knowledge of which helper subclass is the delegate.

## Real World Examples