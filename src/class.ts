class Department {
  // private name: string;
  // private totalEmployees: number;
  constructor(
    private readonly id: string,
    private name: string,
    private totalEmployees: number
  ) {}

  sayNumberOfEmployees() {
    console.log(
      `There is ${this.totalEmployees} number of employees on department ${this.name}`
    );
  }

  addEmploye() {
    console.log(`${this.id} added`);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, name: string, totalEmployees: number) {
    super(id, name, totalEmployees);
  }
}

// Al declararla como abstracta carece de implementación y quienes
// hereden de esta deberán implementar sus métodos abstractos o pueden
//sobreescribir los no abstractos. Las clases abstractas no pueden ser
// instanciadas.
abstract class Vehicle {
  constructor(protected year: number, protected make: string) {}
  abstract description(): void;
}

class Car extends Vehicle {
  constructor(year: number, make: string, private engine: number) {
    super(year, make);
  }
  description() {
    console.log(
      `This car is from ${this.year} and was built by: ${this.make} and it has a ${this.engine} engine`
    );
  }
}
