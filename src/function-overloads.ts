/**
 * permite tener definir multiples function signatures
 * osea poder llamar a una función con diferentes
 * parámetros
 */
type CombinableP = number | string;
function addN(a: number, b: number): number;
function addN(a: string, b: string): string;
function addN(a: string, b: number): string;
function addN(a: number, b: string): string;
function addN(a: CombinableP, b: CombinableP) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(addN(5, 'Carlos'));
console.log(addN('Carlos', 30));
console.log(addN('Carlos', 'Delgado'));
console.log(addN(1990, 30));
