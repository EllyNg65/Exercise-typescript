// interface
interface IsPerson {
    firstname: string; 
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// This is an object, not a class, so we need to provide speak and spend functions when initiate it
const me:IsPerson = {
    firstname: "Linda", 
    age : 40, 
    speak(text) {
        console.log("Hi how are you? "+ text)
    }, 
    spend(amount) {
        return amount
    }
}
me.speak("Yoo")

// let someone : IsPerson;  //This will cause error for someone.age, as someone is used before assign
let someone : IsPerson = {
    firstname: "Harry", 
    age : 20, 
    speak(text) {
        console.log("Good morning "+ text)
    }, 
    spend(amount) {
        return amount
    }
};  // Need to initiate first, then the property can be accessed
someone.age = 40
console.log("Harry ", someone)