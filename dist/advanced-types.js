"use strict";
console.log('im advanced types');
const e1 = {
    name: 'Carlos',
    privileges: ['admin'],
    startDate: new Date(),
};
console.log(e1);
function addNums(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        //TypeGuard
        return a.toString() + b.toString();
    }
    return a + b;
}
addNums(5, 7);
function printEmployeeInfo(emp) {
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
const v1 = new Carro();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // TypeGuard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
