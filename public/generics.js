"use strict";
// Generics
// <T> capture whatever we pass into the function 
// not neccessary T, can be any letter
// const addUID = <T extends {name:string}>(obj:T) => {  //Only allow object with property name
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Mocha', age: 30 });
// Error because typescript does not know the object returned from addUID has property name
// need to add generic type <T>
console.log("Mocha", docOne.name);
const resourceOne = {
    uid: 1,
    resourceName: 'food',
    data: { food: 'carrot' }
};
const resourceTwo = {
    uid: 1,
    resourceName: 'food',
    data: "fresh"
};
const resourceThree = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ["bread", 'milk', 'toilet roll']
};
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const r1 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "Harry Potter" }
};
const r2 = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: { name: "JK Rowling" }
};
console.log("Movie resource ", r1, r2);
// When print in console, the resourceType of r1 is 0, and r2 is 1
// Tuples
// we can edit the content of the tuple, but it need to follow the type specified during initiation
let student = ['peter', 34, true];
