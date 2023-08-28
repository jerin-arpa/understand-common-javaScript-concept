// primitive example
// Primitive type are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);



// non primitive example
// Object and array are pass by reference
let student1 = { name: 'ismat', job: 'student' };
let student2 = { name: 'Jerin', job: 'student too' };

function makeMovie(actor1, actor2) {
    actor1.name = 'Arpa';
    actor2.job = 'charu';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);