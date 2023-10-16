/* dot Vs bracket Notation for adding somthing in object
--> we majorly use dot notation 
--> Bracket notation is used to create double word key 
eg-
person.good humor ="dark";  --> not possible
--but--
person["good humor"] ="dark" --> possible
*/
const person = {
    name:"exorcist",
    age:22,
    hobbies : ["powerlifting","sleeping","dieing"]
}

person['good humor'] ="dark";

console.log(person);

// adding this email key to person object while taking the value entered in the key 
const key ="email"; //--> assigning the name of key

person[key] ="exorcistKing@gmail.com"; //--> giving the value of key 


console.log(person);