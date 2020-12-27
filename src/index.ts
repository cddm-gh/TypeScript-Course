//Enums
enum JobStatus {
  WORKING = 'WORKING',
  ON_VACATION = 'ON_VACATION',
  UNEMPLOYED = 'UNEMPLOYED',
}

//type alias
type CombinableType = number | string;
type User = {
  name: string;
  age: CombinableType;
  description?: string;
  jobStatus?: JobStatus;
};

const myUser: User = {
  name: 'Carlos',
  age: 30,
  description: 'Backend Developer',
  jobStatus: JobStatus.UNEMPLOYED,
};
console.log(myUser);

function add(n1: CombinableType, n2: CombinableType): CombinableType {
  console.log(JobStatus.WORKING);
  return +n1 + +n2;
}

const number1 = '27.8';
const number2 = 13;
const result = add(number1, number2);
function printResult(resultado: CombinableType): void {
  console.log(`Resultado: ${resultado}`);
}
printResult(result);

//function as types
let combinesValues: (a: CombinableType, b: CombinableType) => CombinableType;
combinesValues = add;

console.log(combinesValues(4, 6));

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}

function printer(value: number) {
  console.log(`The result is = ${value}`);
}

addAndHandle(11, 19, printer);

const hobbiesArray = ['programar', 'web', 'nodejs', 'typescript', 'python'];
const [hobby1, hobby2, ...restHobbies] = hobbiesArray;
console.log(hobby1);
console.log(hobby2);
console.log(restHobbies);
console.log(restHobbies.indexOf('python'));

const myObject = {
  namE: 'Carlos',
  age: 30,
  height: 1.7,
  color: 'white',
  other: {
    deep: {
      deeper: {
        final: '',
      },
    },
  },
};

const { namE, age, ...otherProps } = myObject;
console.log(namE);
console.log(age);
console.log(otherProps);

// optional chaining
if (myObject?.other?.deep?.deeper?.final) console.log('todo existe');
else console.log('alguna prop no existe en el objeto');
const final = myObject?.other?.deep?.deeper?.final ?? 'otro final';
final ? console.log('si está final') : console.log('final es falsy');
console.log(final);
// nullish coalescing
const foo = null ?? 'default string';
const foo2 = 0 ?? 43;
console.log(foo, foo2);
