# Introduction to TypeScript

TypeScript is a superset of JavaScript that adds optional static typing to the language. This means you can define the data types of your variables and functions, which helps to catch errors early in the development process and improve code readability. TypeScript compiles to plain JavaScript that can run in any browser or environment that supports JavaScript.

## **Benefits of using TypeScript**

* **Improved code quality:** Static typing helps to catch errors early in the development process, leading to more robust and maintainable code.
* **Increased developer productivity:** Type checking can help developers understand code more easily and refactor it with confidence.
* **Larger scale development:** TypeScript is well-suited for building large-scale applications with many moving parts.

## **Basic Types in TypeScript**

TypeScript supports a variety of basic types, including:

* **Number:** Represents numeric values (e.g., 1, 3.14, -10)
* **String:** Represents text data (e.g., "Hello, world!", 'This is a string')
* **Boolean:** Represents true or false values (e.g., true, false)
* **Array:** Represents an ordered collection of items of the same or compatible types (e.g., `let numbers: number[] = [1, 2, 3]`)
* **Tuple:** Represents a fixed-length array of specific types (e.g., `let person: [string, number] = ["John Doe", 30]`)
* **Object:** Represents an unordered collection of key-value pairs (e.g., `let employee: { name: string, age: number } = { name: "Jane Smith", age: 25 }`)

## **Declaring Variables**

To declare a variable with a specific type in TypeScript, you use the following syntax:

```typescript
let variableName: typeName;
```

Here's an example of declaring variables of different types:

```typescript
let name: string = "Alice";
let age: number = 35;
let isLoggedIn: boolean = true;

let fruits: string[] = ["apple", "banana", "orange"];
let person: { name: string, age: number } = { name: "Bob", age: 40 };
```

## **Type Annotations**

You can also use type annotations to infer the type of a variable based on its initial value:

```typescript
let message = "This is a message";  // type is inferred as string

let count = 10;  // type is inferred as number
```

## **Classes and Interfaces**

### **Classes**

Classes in TypeScript allow you to create blueprints for objects with properties and methods. Here's an example of a simple class:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

let person1 = new Person("Alice", 35);
person1.greet();
```

## interface
- Interfaces in TypeScript define contracts for objects, specifying the properties and methods they must have. Here's an example of an interface:
```typescript
interface Shape {
  color: string;
  area(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

let myCircle = new Circle(5);
console.log(myCircle.area());
```