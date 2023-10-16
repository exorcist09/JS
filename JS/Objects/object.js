/* object reference type
arrays are good but not sufficient for storing real life data
--> objects are used to store key value pair 
--> Objects don't have index
--> keys are also known as Properties
--> in JS keys are basically string but you need not to keep it in quotes but if you want you can, but if you want to add two word key you need to put quotation otherwise it will give error. 
*/


// Creating objects
const person = {
    name:"exorcist",
    age:22,
    hobbies : ["powerlifting","sleeping","dieing"]
}
console.log(person);

// accessing data from objects
console.log(person.hobbies);

// how to add key-value pair to Object
person.gender ="male";
console.log(person);






