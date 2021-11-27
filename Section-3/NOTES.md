# Section 3 - The TypeScript Compiler

## The Compiler --watch Command

```app.ts --watch```
```app.ts -w```

## Compiling the entire project

This will watch all TypeScript files in a directory

```tsc --init```
```tsc -w```

## Including & Excluding Files

In the ```tsconfig.json``` file that was generated from the tsc --init command, you can add an "exclude" and "include" property:

```json
"exclude": [
  "node_modules", // excluded by default
  "my-file.ts",
  "*.dev.ts",
  "**/*.dev.ts" // Any file with this pattern in any folder will be ignored
],
"include": [
  "app.ts"
]
```

## Setting a compilation target