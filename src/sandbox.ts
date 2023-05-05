/* Section 1 */
///////////////

/* Constants */
const person = 'Peter';
let age = 30;
let isStudent = false;
// person = 3; 
console.log('person ', person);

/* Functions */
const squareArea = (width:number, height:number) => {
    return width*height
};
console.log('square ', squareArea(4,3));

/* Array */
let ages = [9,20,48];
ages.push(78);
// ages.push('Peter') ;
console.log('ages ', ages);

let mixed = ['ballon', 6, 'cake', 'maria'];
mixed.push(9);
mixed.push('candies');

/* Object */
let candidate = {
    name: 'Peter',
    age: '20', 
    isStudent: true
};
// Cannot add extra properties, and we need to stick to initial structure

// candidate.age = false;
// candidate = {
//     name: 'Peter',
//     // age: '20', 
//     isStudent: true
// };

/* Section 2 */
///////////////
/* Explicit types */
let character: string;
let hourWorked: number;
let isLoggedIn: boolean;
let anything: any

let guests: string[] = [];
guests.push('candle')

/* Union types */
let birthdayMemo: (string | number)[] = []
birthdayMemo.push('Olivia')
birthdayMemo.push(90)

/* Object explicit types */
let ninja: {
    name: string, 
    age: number, 
    beltColour: string
}
// ninja = {name:'Mario'}
// ninja = {name:'Mario', age:4, beltColour:'black', skills:[]}

/* Functions - more explicit*/
let someFunction: Function; // use less often

/* Optional parameter, default value, return type */
const add = (a: number, b:number = 10, c?: number | string):number => {
    console.log('addition' , a+b)
    console.log(c)
    return a+b  // no return, type will be void
}
// Typescript could infer the type of return from the inputs, 
// so if ():number is not specified, typescript knows the return type should be number 

let result = add(2)

/* Beware when creating function */
// a, b do not need to have same variable name as object1, object2 
// Only make sure the types of parameters object1 and a are compatible, vice versa
let makeSentence: (a: string, b: string) => void
makeSentence = (object1:string, object2:string) => {
    console.log(`${object1} eats ${object2}`)
}
makeSentence( "cat", "mouse",)
makeSentence( "mouse", "cat",)

// better and clearer
let makeSentence2 = (object1: string, object2:string) => {
    console.log(`${object1} eats ${object2}`)
}

/* Section 3 */
///////////////
/* Type Aliases */
type Uid = string | number 
type User = {
    name: string, 
    uid: Uid,
}

const greet = (user: User) => {
    console.log("Hi "+ user.name + ", your uid is ", user.uid)
}
greet({name:"Alex", uid:'12345'})
greet({uid:'12345', name:"Alex",})


/* Section 4 */
///////////////
const anchor = document.querySelector('a')!;
// The non-null assertion operator ! tells the TypeScript compiler that a value typed as optional cannot be null or undefined
if (anchor){
    console.log(anchor.href)
}
console.log(anchor.href)
// TypeScript contrains special types for every Dom elements

const form1 = document.querySelector('form')
// TypeScript knows form1 is the HTMLFormElement
const form2 = document.querySelector('.new-item-form')
// TypeScript does not knows form2 is the HTMLFormElement, it just know form2 is an Element
// So we cannot add ! behind document.querySelector('.new-item-form')

/* Type Casting !*/
const formExample = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)