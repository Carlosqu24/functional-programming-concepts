

// Usted tiene una función con cierta estructura
const fruits: string[] = ['Apple', 'Orange', 'Pineapple', 'Grapes'];
const score: number[] = [43, 23, 56, 4, 612, 2, 5, ]; 

function sortArray(list:  number[] | string[]) {
                return list.sort()
};

console.log(sortArray(fruits))
console.log(fruits)
// Acá hay un detalle y esque la function sort() es mutable, lo que quiere decir es que altera directamente al arreglo que se le pasa
// Esto puede ser un problema, pero depende del caso

const fruits2: readonly string[] = ['Watermelon', 'Strawberry', 'Peach']; 

function sortArray2(list: readonly string[]) {
                return [...list].sort()
}

console.log(sortArray2(fruits2))
console.log(fruits2)
// De este modo logramos hacer inmutables las variables