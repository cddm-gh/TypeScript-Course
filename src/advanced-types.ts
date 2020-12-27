console.log('im advanced types');
//Intersection Types
/**
 * permiten combinar otros tipos
 * con la intersección de los tipos que lo conforman
 */
type Admin = {
  name: string;
  privileges: string[];
};

type Employe = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employe;

const e1: ElevatedEmployee = {
  name: 'Carlos',
  privileges: ['admin'],
  startDate: new Date(),
};

console.log(e1);

/**
 * Type Guards:
 * Ayudan con los Union Types e.g. number | string
 * asegurando que el codigo se ejecute correctamente
 * basado en el tipo exacto con el que se está trabajando
 * en runtime.
 */
type Combinable = string | number;
function addNums(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    //TypeGuard
    return a.toString() + b.toString();
  }
  return a + b;
}
addNums(5, 7);

type UnknownEmployee = Admin | Employe;
function printEmployeeInfo(emp: UnknownEmployee) {
  // TypeGuard
  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('StartDate: ', emp.startDate);
  }
  console.log(emp.name);
}
class Carro {
  drive() {
    console.log('driving');
  }
}
class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo() {
    console.log('loading cargo on my truck');
  }
}
type VehicleType = Carro | Truck;
const v1 = new Carro();
const v2 = new Truck();

function useVehicle(vehicle: VehicleType) {
  vehicle.drive();
  // TypeGuard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}
useVehicle(v1);
useVehicle(v2);

/**
 * DiscrimatedUnions: Es un patron que hace la implementación
 * de UnionTypes más fácil se designa una propiedad en común pero
 * con diferente valor para poder discriminar luego el uso.
 */

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'bird':
      console.log(`Moving with speed: ${animal.flyingSpeed}`);
      break;
    case 'horse':
      console.log(`Moving with speed: ${animal.runningSpeed}`);
      break;
    default:
      console.log('Unknown animal');
      break;
  }
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
