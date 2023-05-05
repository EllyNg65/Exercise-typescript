// Generics
// <T> capture whatever we pass into the function 
// not neccessary T, can be any letter

// const addUID = <T extends {name:string}>(obj:T) => {  //Only allow object with property name
const addUID = <T extends object>(obj:T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
};

let docOne = addUID({name:'Mocha', age:30});
// Error because typescript does not know the object returned from addUID has property name
// need to add generic type <T>
console.log("Mocha", docOne.name) 

// let docTwo = addUID("hello"); //Error because addUID accept object only

// with interface
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T; 
}

const resourceOne: Resource<object> = {
    uid: 1, 
    resourceName: 'food',
    data: {food:'carrot'}
}

const resourceTwo: Resource<string> = {
    uid: 1, 
    resourceName: 'food',
    data: "fresh"
}

const resourceThree: Resource<string[]> = {
    uid: 1, 
    resourceName: 'shoppingList',
    data: ["bread", 'milk', 'toilet roll']
}

// Enums
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// Each of the element in enum is associate with an index number 
// Useful when need to make a list, but dont want to remember the respective index for every elements
interface MovieResource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T; 
}

const r1: MovieResource<object> = {
    uid: 1, 
    resourceType: ResourceType.BOOK, 
    data: {title: "Harry Potter"}
}

const r2: MovieResource<object> = {
    uid: 2, 
    resourceType: ResourceType.AUTHOR, 
    data: {name: "JK Rowling"}
}

console.log("Movie resource ", r1, r2)
// When print in console, the resourceType of r1 is 0, and r2 is 1

// Tuples
// we can edit the content of the tuple, but it need to follow the type specified during initiation
let student: [string, number, boolean] = ['peter', 34, true]