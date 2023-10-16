/* changing HTML elements with JS 

innerHTML
 as you will add element with JS the browser will render the whole code again 
 which will cause performance issues

*/

const todoNow =document.querySelector(".todo")

//to do this with JS we use --> document.createElement();


const newlearning =document.createElement("li");
const newlearningText =document.createTextNode("teach students");
newlearning.appendChild(newlearningText); 
//append 
todoNow.append(newlearning)

//prepend
todoNow.prepend(newlearning)
console.log(newlearning); 

//before --> to add before the div

const newTodoItemText1=document.createTextNode("teach new student");
todoNow.before(newTodoItemText1);


//after --> add after the div
const newTodoItemText2=document.createTextNode("teach new student");
todoNow.after(newTodoItemText2);