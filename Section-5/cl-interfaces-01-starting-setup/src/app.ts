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
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push('Person');
  }

  addReport(text: string) {
    this.reports.push(text);
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

accounting.addReport('Something went wrong...');