import { Invoice } from './classes/Invoice.js'; // .js is important
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
let docOne = new Invoice('Pamela', 'web work', 403);
let docTwo = new Payment('Kai', 'design', 230);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice('mario', 'building website', 250);
const invTwo = new Invoice('josh', 'UIUX', 300);
// const invTwo = new Invoice(details:'UIUX',client="Melissa", amount="300"); // This will not work
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client);
});
const form = document.querySelector('.new-item-form');
const list = new ListTemplate(document.querySelector('.item-list'));
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
