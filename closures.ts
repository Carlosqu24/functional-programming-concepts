function counter(x: number = 1) {
                let number = x;

                return () => {
                                console.log("Hola " + number++);
                }
}

const myClosure = counter();
const mySecondClosure = counter(10);
const myThirdClosure = counter(50);

myClosure()
myClosure()
myClosure()

mySecondClosure()
mySecondClosure()

myThirdClosure()
myThirdClosure()