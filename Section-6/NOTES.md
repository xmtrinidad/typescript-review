# Advanced Typing Concepts

* Intersection Types
* Type Guards
* Discriminated Unions
* Type Casting
* Function Overloads

## Intersection Types

Allows us to combine other types

```typescript
type Admin = {
  name: string;
  prvileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Test',
  prvileges: ['do-stuff'],
  startDate: new Date()
}
```

## Type Guards

Example of type guard using ```typeof```
```typescript
function add(a: Combinable, b: Combinable) {
  // Type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

Example using ```in``` keyword:
```typescript
function printEmployeeinformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Priv: ' + emp.privileges)
  }

  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate)
  }
}
```

```instanceof``` example:
```typescript
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```