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