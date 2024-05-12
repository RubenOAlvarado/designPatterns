## Description
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

## Benefits
- You can clone objects without coupling to their concrete classes.
- You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
- You can produce complex objects more conveniently.

## Drawbacks
- Cloning complex objects that have circular references might be very tricky.

## Example
```typescript
const prototype1 = new ConcretePrototype1();
const clonedPrototype1 = prototype1.clone();
clonedPrototype1.usefulFunction(); // Output: The result of the Prototype1

const prototype2 = new ConcretePrototype2();
const clonedPrototype2 = prototype2.clone();
clonedPrototype2.usefulFunction(); // Output: The result of the Prototype2
```

## Relations with Other Patterns
- Prototype can help when you need to save copies of the factory’s products for future use.
- You can use Prototype along with Factory Method to let the subclasses of the factory classes return an instance of a subclass of the product class.
- You can use Prototype along with Abstract Factory. In this case, the Abstract Factory can be used to create prototypes of products, which can be cloned instead of creating new instances.
- You can use Prototype along with Builder. The Prototype pattern can be used to clone the builder’s products, which is an alternative to creating a new instance.
- You can use Prototype along with Singleton. The Singleton pattern can be implemented by cloning a prototype instead of creating a new instance.
- You can use Prototype along with Composite. This lets you clone complex structures instead of re-constructing them from scratch.
- You can use Prototype along with Decorator. This lets you clone the original object and then extend it with new functionality.
- You can use Prototype along with Observer. The pattern can be used to clone the subject and then attach the cloned subject to the observer.
- You can use Prototype along with State. The pattern can be used to clone the context and then switch to a new state.
- You can use Prototype along with Strategy. The pattern can be used to clone the context and then replace the strategy with a new one.
- You can use Prototype along with Visitor. The pattern can be used to clone the subject and then let the visitor operate on the cloned subject.

## Class Diagram
![Prototype](https://upload.wikimedia.org/wikipedia/commons/1/14/Prototype_UML.svg)

## Applicability
Use the Prototype pattern when:
- your code shouldn’t depend on the concrete classes of objects that you need to copy.
- you want to reduce the number of subclasses that only differ in the way they initialize their respective objects.
- you want to let the client code work with objects without knowing their concrete classes.