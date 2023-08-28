/* 
Strongly typed language

int a =5;
string b = 'Ismat Jerin';
bool c = True;
object = {name: 'Jerin', id:38};
int[] numbers = [1,2,3]
string[] = ['x','y'];
*/

// java script is a Dynamic type language

// primitive type
const a = 5;
const b = 'Ismat Jerin';
const c = true;

// non-primitive
const ages = [45, 34];
const student = { name: 'Jerin', id: 38 };
console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);



let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);



let p = { job: 'Web Developer' }
let q = p;
q = { job: 'Backend developer' }
console.log(p, q);