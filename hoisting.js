
prints();
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log('outside', i);


function prints() {
    console.log('inside prints', 5);
}


const print10 = function () {
    console.log('inside print10', 10);
}
print10();