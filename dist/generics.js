"use strict";
console.log('Im generic');
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'carlos', hobbies: ['code', 4] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let description = 'Got no value.';
    if (element.length > 0) {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}
const resultcd = countAndDescribe(['Hi folks!!!', 'HolaXD']);
console.log(resultcd);
function extractAndConvert(obj, key) {
    console.log('Value: ' + obj[key]);
}
extractAndConvert({ name: 'Carlos' }, 'name');
class StorageClass {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get items() {
        return this.data;
    }
}
const textStorage = new StorageClass();
textStorage.addItem('gory');
textStorage.addItem('thomas');
console.log(textStorage.items);
const numberStorage = new StorageClass();
numberStorage.addItem(1);
const objectStorage = new StorageClass();
objectStorage.addItem({ name: 'carlos' });
function printCourse(title, description) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
//Readonly permite que la declaración de un tipo sea solo lectura
const namesro = ['Carlos', 'Thomas'];
// namesro.push('no puedo agregar este');
