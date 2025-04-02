// Mutation vs Immutability

// Immutability => Never changes, always build new
// Mutability => Mutation / Modifying the existing structure

const someArray = [1, 2, 3, 4];

console.log(someArray.map((num) => num * 2));
console.log(someArray.map((num) => num * 2));
console.log(someArray.map((num) => num * 2));
console.log(someArray.map((num) => num * 2));
console.log(someArray.map((num) => num * 2));

console.log([...someArray].pop());
console.log([...someArray].pop());
console.log([...someArray].pop());
console.log([...someArray].pop());
console.log([...someArray].pop());

const bob = { a: 1, b: { value: 5 } };
const bobby = { ...bob, b: {...bob.b} };

bob.a = 5;
bob.b.value = 10

console.log(bob, bobby);
