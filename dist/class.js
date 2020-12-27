"use strict";
class Department {
    // private name: string;
    // private totalEmployees: number;
    constructor(id, name, totalEmployees) {
        this.id = id;
        this.name = name;
        this.totalEmployees = totalEmployees;
    }
    sayNumberOfEmployees() {
        console.log(`There is ${this.totalEmployees} number of employees on department ${this.name}`);
    }
    addEmploye() {
        console.log(`${this.id} added`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, name, totalEmployees) {
        super(id, name, totalEmployees);
    }
}
// Al declararla como abstracta carece de implementación y quienes
// hereden de esta deberán implementar sus métodos abstractos o pueden
//sobreescribir los no abstractos. Las clases abstractas no pueden ser
// instanciadas.
class Vehicle {
    constructor(year, make) {
        this.year = year;
        this.make = make;
    }
}
class Car extends Vehicle {
    constructor(year, make, engine) {
        super(year, make);
        this.engine = engine;
    }
    description() {
        console.log(`This car is from ${this.year} and was built by: ${this.make} and it has a ${this.engine} engine`);
    }
}
