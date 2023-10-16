const h1 =document.querySelector("h1");
//going to parent of h1 which is div(parentH1)
const parentH1= h1.parentNode;
parentH1.style.color="purple";

//going to parent of div(parentH1) to its parent(body)
const parentH1Parent=parentH1.parentNode;
parentH1Parent.style.backgroundColor="grey"; 
 