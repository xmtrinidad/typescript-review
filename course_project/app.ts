// Looks like an object but this is an "object type"
const person = {
  name: 'max',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

// An array with any can hold multiple values
let things: any[] = ['Sports', 1, true]

// With an array of strings, TS can detect methods that are used for specific data types
for (const hobby of person.hobbies) {
  // TS knows a hobby in this example is a string, so toUpperCase works here and doesn't throw an error
  console.log(hobby.toUpperCase())
}