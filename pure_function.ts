// Es cualquier función que no tiene efectos colaterales y, que si esta se ejecuta con los mismos valores, siempre debería retornar lo mismo

const some = () => Math.random();

console.log(some() * 100)
console.log(some() * 100)
console.log(some() * 100 )

const sum = (x: number, y: number) => x + y;

console.log(sum(10, 20))
console.log(sum(10, 20))
console.log(sum(10, 20))