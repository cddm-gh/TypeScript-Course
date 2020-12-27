"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d, _e, _f, _g;
//Enums
var JobStatus;
(function (JobStatus) {
    JobStatus["WORKING"] = "WORKING";
    JobStatus["ON_VACATION"] = "ON_VACATION";
    JobStatus["UNEMPLOYED"] = "UNEMPLOYED";
})(JobStatus || (JobStatus = {}));
const myUser = {
    name: 'Carlos',
    age: 30,
    description: 'Backend Developer',
    jobStatus: JobStatus.UNEMPLOYED,
};
console.log(myUser);
function add(n1, n2) {
    console.log(JobStatus.WORKING);
    return +n1 + +n2;
}
const number1 = '27.8';
const number2 = 13;
const result = add(number1, number2);
function printResult(resultado) {
    console.log(`Resultado: ${resultado}`);
}
printResult(result);
//function as types
let combinesValues;
combinesValues = add;
console.log(combinesValues(4, 6));
function addAndHandle(a, b, cb) {
    const result = a + b;
    cb(result);
}
function printer(value) {
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
const { namE, age } = myObject, otherProps = __rest(myObject, ["namE", "age"]);
console.log(namE);
console.log(age);
console.log(otherProps);
// optional chaining
if ((_c = (_b = (_a = myObject === null || myObject === void 0 ? void 0 : myObject.other) === null || _a === void 0 ? void 0 : _a.deep) === null || _b === void 0 ? void 0 : _b.deeper) === null || _c === void 0 ? void 0 : _c.final)
    console.log('todo existe');
else
    console.log('alguna prop no existe en el objeto');
const final = (_g = (_f = (_e = (_d = myObject === null || myObject === void 0 ? void 0 : myObject.other) === null || _d === void 0 ? void 0 : _d.deep) === null || _e === void 0 ? void 0 : _e.deeper) === null || _f === void 0 ? void 0 : _f.final) !== null && _g !== void 0 ? _g : 'otro final';
final ? console.log('si está final') : console.log('final es falsy');
console.log(final);
// nullish coalescing
const foo = null !== null && null !== void 0 ? null : 'default string';
const foo2 = 0 !== null && 0 !== void 0 ? 0 : 43;
console.log(foo, foo2);
