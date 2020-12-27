console.log('In Decorators');

function Logger(text: string) {
  console.log('Class Decorator');
  return function (_: Function) {
    console.log('Logging...', text);
    // console.log(target);
  };
}

function SecondLogger(text: string) {
  return function (_: Function) {
    console.log('Logging...', text);
    // console.log(target);
  };
}

@Logger('im second')
@SecondLogger('im first')
class Person {
  name = 'Carlos';
  constructor() {
    console.log(`Creating person object...`);
  }
}

const p = new Person();
console.log(p);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log(target);
  console.log(propertyName);
}

function Log2(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
}

function Log3(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method Decorator');
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  private _title: string;
  @Log
  private _price: number;

  constructor(title: string, price: number) {
    this._price = price;
    this._title = title;
  }

  @Log2
  set price(price: number) {
    if (price > 0) this._price = price;
  }

  get price() {
    return this._price;
  }

  @Log3
  getPriceWithTaxes(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const prod = new Product('chair', 23);

//Validation Decorator
interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; // ['required', 'positive']
  };
}
const registeredValidators: ValidatorConfig = {};
function RequiredField(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}
function validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) return true;
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] >= 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @RequiredField
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const c1 = new Course('TypeScript', 33);
if (!validate(c1)) throw new Error('Error de validación del curso');
console.log('curso creado!');
