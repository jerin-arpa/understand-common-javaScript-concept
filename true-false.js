/* 
Truthy
1.truth
2. Any number positive or negative will bw truthy other than 0
3. Any string other than empty string(' ') is truthy
4. '0' , 'false' 
5. Empty object and object will be truthy
6. Empty array and array will be truth


Falsy
1. false
2. if number=0 that will be falsy
3. Empty string('') will be falsy
4. undefined will be falsy
5. null will be falsy
*/


const x = false;
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}


// optional
// Check falsy
const y = '';
if (!y) {
    console.log('value is falsy');
}


// CHeck truthy
const z = ' ';
if (!!z) {
    console.log('value is truthy');
}