/*DOM --> Document Object Model
-->
*/

/* Console.log  -vs- Console.dir
 console.dir(window.document); --> works only on browser not in terminal

*/



//get element by ID
const mainHeading = document.getElementById("main-heading");

//1st way
//textcontent property --> to change the data of that thing
mainHeading.textContent = "Start Learning ASAP";
console.log(mainHeading.textContent); //--> gives all the text content even if it is kept hidden by CSS


//2nd way
//innerText Property --> to change the data of that thing
console.log(mainHeading.innerText); //--> gives only the visible content
