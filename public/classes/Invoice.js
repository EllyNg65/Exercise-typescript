export class Invoice {
    // readonly client: string; 
    // private details: string; 
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details= d;
    //     this.amount = a;
    // }
    constructor(client, // Need to put modifiers in front of property name
    details, // to use this method
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
;
