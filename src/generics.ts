console.log('Im generic');
const names: Array<string> = [];

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'carlos', hobbies: ['code', 4] }, { age: 30 });
console.log(mergedObj);

function countAndDescribe<T extends Array<any>>(element: T): [T, string] {
  let description = 'Got no value.';
  if (element.length > 0) {
    description = `Got ${element.length} elements`;
  }
  return [element, description];
}
const resultcd = countAndDescribe(['Hi folks!!!', 'HolaXD']);
console.log(resultcd);

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  console.log('Value: ' + obj[key]);
}
extractAndConvert({ name: 'Carlos' }, 'name');

class StorageClass<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get items() {
    return this.data;
  }
}
const textStorage = new StorageClass<string>();
textStorage.addItem('gory');
textStorage.addItem('thomas');
console.log(textStorage.items);
const numberStorage = new StorageClass<number>();
numberStorage.addItem(1);
const objectStorage = new StorageClass<object>();
objectStorage.addItem({ name: 'carlos' });

// Generics Utilities

//Partial permite iniciar un tipo con las propiedades
// de otro como opcionales
interface CourseGoal {
  title: string;
  description: string;
}

function printCourse(title: string, description: string): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  return courseGoal as CourseGoal;
}

//Readonly permite que la declaración de un tipo sea solo lectura
const namesro: Readonly<string[]> = ['Carlos', 'Thomas'];
// namesro.push('no puedo agregar este');
