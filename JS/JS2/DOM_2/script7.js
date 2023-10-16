//checking how many classes are defined by something

const learning =document.querySelector(".learning");
console.log(learning.classList);


//adding extra class 
learning.classList.add('bg-dark');

// removing extra cladd
learning.classList.remove('bg-dark');

//to check if a class exist or not
console.log(learning.classList.contains('container'));


//to toggle the existing class with other class specified class --> agar specified class 
// hai to woh remove kar dena aur agar nhi hai toh wo add akr dega 
learning.classList.toggle('bg-dark'); //--> add bgdark because it was removes earlier in code
learning.classList.toggle('bg-dark'); //--> removes the bgdark 