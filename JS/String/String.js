/* String = sequence of characters
-->Are immutable(cannot be changed)
 */

let planet = "Earth"; //-->Earth is the String here

//String-Indexing

// E  A  R  T  H
// 0  1  2  3  4

console.log(planet[3]); //for checking the index we use square-bracket.

//to find length
console.log(planet.length); //--> Spaces also get counted

//for last index
console.log(planet[planet.length - 1]);



//String-Methods

// -->trim()  == remove spaces
let planet2 ="   Venus   ";
planet2=planet2.trim();  //updating the string
console.log(planet2.length);

//-->toUpperCase
console.log(planet2.toUpperCase());

//-->toLowerCase
planet2= planet2.toLowerCase();
console.log(planet2);

//-->slice(start_index,end_index), over here end index is not included
console.log(planet2.slice(1,4));



//String Concatenation

let str1 ="adarsh";
let str2 ="verma";

let str = str1+" "+str2;
console.log(str);


// Tempelate String

let age =22;
let goodStr="adarsh";
// let aboutMe ="my name is "+ goodStr + " "+"and my age is "+age; ==normal method
// let aboutMe =`my name is ${goodStr} and my age is ${age}` //==> us of backtick is done

console.log(aboutMe);
