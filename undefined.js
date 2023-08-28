/* 
8 ways to get undefined
1. Variable that is not initialized will give undefined
2. Function with no return will give undefined
3. parameter that is not passed will be undefined
4. If return has nothing on the right side will return undefined
5. property that doesn't exist on an object will give you undefined
6. Accessing array elements outside of th index range will give you undefined
7. Deleting an element inside an array will give you undefined
8. Set a value directly to undefined will give you undefined
*/

// First way
let first;
console.log(first);


// Second Way
function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);


// Third Way
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);


// fourth way
function fourth(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = fourth(2, -5);
console.log(total);


// Fifth way
const fifth = { id: 2, name: 'Arpa', age: 40 };
console.log(fifth.age, fifth.salary);


// sixth way
const sixth = [4, 3, 65, 4, 3];
console.log(sixth[1], sixth[5], sixth[200]);


// seventh way
const seventh = [4, 3, 65, 4, 3];
/* you should not do it instead use splice */
delete seventh[1];
console.log(seventh);


// Eighth way
const eighth = undefined;

const ninth = null;

console.log(typeof undefined);
console.log(typeof null);