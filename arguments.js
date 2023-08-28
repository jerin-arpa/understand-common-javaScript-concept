function sum(a, b, c) {
    console.log(arguments[4]);

    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 98, 56);
console.log(total);

/* 
const total = sum(45, 89, 12, 98, 56);

output: this is called array like object
[Arguments] { '0': 45, '1': 89, '2': 12, '3': 98, '4': 56 }
146
*/