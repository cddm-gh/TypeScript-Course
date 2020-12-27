"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('In Decorators');
function Logger(text) {
    console.log('Class Decorator');
    return function (_) {
        console.log('Logging...', text);
        // console.log(target);
    };
}
function SecondLogger(text) {
    return function (_) {
        console.log('Logging...', text);
        // console.log(target);
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Carlos';
        console.log(`Creating person object...`);
    }
};
Person = __decorate([
    Logger('im second'),
    SecondLogger('im first')
], Person);
const p = new Person();
console.log(p);
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target);
    console.log(propertyName);
}
function Log2(target, propertyName, descriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
function Log3(target, propertyName, descriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this._price = price;
        this._title = title;
    }
    set price(price) {
        if (price > 0)
            this._price = price;
    }
    get price() {
        return this._price;
    }
    getPriceWithTaxes(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "_price", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTaxes", null);
const prod = new Product('chair', 23);
const registeredValidators = {};
function RequiredField(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objectValidatorConfig)
        return true;
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
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    RequiredField
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const c1 = new Course('TypeScript', 33);
if (!validate(c1))
    throw new Error('Error de validación del curso');
console.log('curso creado!');
