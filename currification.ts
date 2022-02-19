// No Currification
const getTotal = (amount: number, tax: number) => 
                amount + (amount * tax);

console.log('getTotal No Currification:', getTotal(1000, 0.13));
console.log('getTotal No Currification:', getTotal(2000, 0.13));
console.log('getTotal No Currification:', getTotal(3000, 0.13));

// Currificated
function getTotalCurry(_tax: number) {
                let tax: number = _tax;

                return (amount: number) => 
                                amount + (amount * tax);
};

const costaRicaIVA = getTotalCurry(0.13);
console.log('getTotalCurry:', costaRicaIVA(1000));
console.log('getTotalCurry:', costaRicaIVA(2000));
console.log('getTotalCurry:', costaRicaIVA(3000));

console.log('getTotalCurry without storing into a variable', getTotalCurry(0.13)(200000));

//Currificated typed
const getTotalCurry2 = (_tax: number) => (amount: number) => amount + (amount * _tax);

const spainIVA = getTotalCurry2(0.21);
console.log('getTotalCurry2:', spainIVA(1000));
console.log('getTotalCurry2:', spainIVA(2000));
console.log('getTotalCurry2:', spainIVA(3000));