type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Combinable = string | number;
type Numeric = number | boolean;

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Test',
  privileges: ['do-stuff'],
  startDate: new Date()
}

function add(a: Combinable, b: Combinable) {
  // Type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeinformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Priv: ' + emp.privileges)
  }

  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate)
  }
}

printEmployeeinformation(e1);

class Car {
  drive() {
    console.log('driving');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}