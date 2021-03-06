class Department {
  protected employees: string[] = [];

  // Short hand initialization
  constructor(private readonly id: string, public name: string) {
    
  }

  // Extra type safety to ensure the instance of this class is being used
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a value.');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push('Person');
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department('d1', 'Accounting');
// const it = new ITDepartment('d1', ['Xavier']);

// it.addEmployee('Bruh');
// it.addEmployee('Thing');

// This won't work because employees is private
// accounting.employees[2] = 'Anna';

// it.describe();
// it.printEmployeeInformation();

// console.log(it);

const accounting = new AccountingDepartment('d2', [])

console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'Test thing';
accounting.addReport('Something went wrong...');

/**
 * INTERFACE STUFF
 */

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void
// }

interface Named {
  // readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}



// Tell TypeScript this class should adhere to the Greetable interface
class Person implements Greetable {
  name?: string;
  
  constructor(n: string) {
    if (n) {
      this.name = n;
    }
    
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

let user1: Greetable;

user1 = new Person('Xavier');

// Interface function example
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) {
  return n1 + n2;
}