/*Use of const for creating arr
-->const dont allow to change the values later

*/

const fruits =["apple","mango"];

fruits.push("banana");
console.log(fruits);

/* in this array we can see that const allowed to push 
the element because when the array was created it was in heap memory 
so when you pushed something in it got changed 
but if you tried changeing it like this
fruits=["apple","mango","banana"]
it will have given error.
--> which means use of array method are allowed 
 */


//--> majorly use const for making arr so as to reduce error
