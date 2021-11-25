# TypeScript Basics & Basic Types

## Core Types

* number - same as js
* string - same as js
* boolean - same as js

## Union Types

* Allow for multiple types (like a string and/or a number for a variable)

```typescript
  function (combine)(input1: number : string) {}
```

## Literal Types

Literally defining types:

```typescript
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text')
```

## Type Aliases / Custom Types

```typescript
type Combinable = number | string
```

## Functions as Types

Example:
```typescript
let combineValues: (a: number, b: number) => number;
```

## Unknown Type

Similar to the any type, but more restrictive

```typescript
if (typeof userInput === 'string') {
  let userInput: unknown;
  let userName: string;

  userInput = 5;
  userInput = 'Thing';

  if (typeof userInput === 'string') {
    userName = userInput;
  }
}
```

## Never Type