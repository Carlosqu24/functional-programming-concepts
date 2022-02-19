// It is any function that has no side effects and, if it is executed with the same values, it should always return the same
// some is not a pure function because returns a random number
const some = () => Math.random();

console.log(some() * 100)
console.log(some() * 100)
console.log(some() * 100 )

// sum function is a pure function because always will returns the same value (if you pass the same params)
const sum = (x: number, y: number) => x + y;

console.log(sum(10, 20))
console.log(sum(10, 20))
console.log(sum(10, 20))