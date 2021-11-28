class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // Extra type safety to ensure the instance of this class is being used
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();