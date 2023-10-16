/*loop
--> Standard for loop
--> for of loop
--> forEach  --> cannot be used to iterate through HTML collections==> to use it convert HTML collection to Array
*/


let navItems = document.getElementsByTagName("a");


//Standard -for loop
for(let i=0;i<navItems.length;i++){
    const navItem =navItems[i];
    navItem.style.color= "red";
}


//for-of loop
for (navItem of navItems){
    navItem.style.color= "red";
}

//converting HTML COllection to array 

navItems=Array.from(navItems);
console.log(Array.isArray(navItems));



//Converting Node_list to Array 
const nawItems =document.querySelectorAll("a");
nawItems=Array.from(nawItems);

