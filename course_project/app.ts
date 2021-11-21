// Looks like an object but this is an "object type"
const person = {
  name: 'max',
  age: 30
};

// This is the actual type of object
// const person1: object = {
//   name: 'person',
//   age: '30'
// }

const person1: {name: string; age: number;} = {
  name: 'person',
  age: 30
}

// nickname doesn't exist on the person object type
// console.log(person.nickname)