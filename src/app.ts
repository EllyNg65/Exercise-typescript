import { Invoice } from './classes/Invoice.js' // .js is important
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

let docOne = new Invoice('Pamela', 'web work', 403);
let docTwo = new Payment('Kai', 'design', 230);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const invOne = new Invoice('mario', 'building website', 250);
const invTwo = new Invoice('josh', 'UIUX', 300);
// const invTwo = new Invoice(details:'UIUX',client="Melissa", amount="300"); // This will not work

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, )
})

const form = document.querySelector('.new-item-form') as HTMLFormElement

const list = new ListTemplate(document.querySelector('.item-list')!)

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount')  as HTMLInputElement

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    let values:[string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    }else {
        doc = new Payment(...values)
    }
    
    list.render(doc, type.value, "end")
})
