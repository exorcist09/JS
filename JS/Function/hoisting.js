/* hoisting
 -->you will se hello function is called before even it is made and it works fine this is true for JS but does not work inother languages
--> Also this will work nly with function declaration but now with function expression
*/


hello();

function hello(){
    console.log("hello world")
};


 