# Interfaces

Describes the structure of an object and can be used to type check an object

```typescript
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void
}
```

## Difference between type and interface

Interfaces and types can only be used to describe the structure of an object, but inside of a custom type other things such as union types, but using an interface to describe a custom type is more clear and more common.

Interfaces can be used to share amongst classes:

```typescript
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

// Tell TypeScript this class should adhere to the Greetable interface
class Person implements Greetable {
  name: string;
  
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}
```

## Readonly Interface Properties

```public``` and ```private``` can't be used on interfaces but ```readonly``` can be used to make it clear that a property can't be changed

```typescript
interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}
```



