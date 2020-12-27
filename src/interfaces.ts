interface Person {
  name: string;
  age: number;
  combined: number | string;
  nonMandatoryProp?: string;

  greet(): void;
  optionalMethod?(): void;
}

interface Player extends Person {
  sport: string;
}

const user: Person = {
  name: 'hola',
  age: 23,
  combined: 123,
  greet: () => console.log('hello'),
};

interface AddFn {
  (a: number, b: number): number;
}
let addFn: AddFn;
addFn = (n1: number, n2: number) => n1 + n2;
console.log(addFn(5, 4));
