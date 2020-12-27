"use strict";
function addN(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addN(5, 'Carlos'));
console.log(addN('Carlos', 30));
console.log(addN('Carlos', 'Delgado'));
console.log(addN(1990, 30));
