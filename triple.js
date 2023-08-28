/* 
1. Always use ===
2. Equal comparison does not work for non-primitive type

*/


// double equal
const first = 2;
const second = 2;

if (first == second) {
    console.log('Values are equal');
}
else {
    console.log('Values are not equal');
}


// triple equal (it check the value and also the type of value)
const third = 2;
const fourth = '2';

if (third === fourth) {
    console.log('Values are equal');
}
else {
    console.log('Values are not equal');
}


// type coercion
// type conversion
// type casting