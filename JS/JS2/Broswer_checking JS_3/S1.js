//Working is understand based on "index.html" file


//getting the root Node of the Document 
const rootNode= document.getRootNode();

//child RelationShip
const htmlElementNode =rootNode.childNodes[0];
console.log(htmlElementNode.childNodes);
const headElementNode =htmlElementNode.childNodes[0];
/*--> gives 3 element meaning 1-head element
  2nd -text elemnet which is made by newline Spcae
 3rd -body element
 */

//parent relationship
console.log(htmlElementNode.parentNode); 

//Sibling Relationship

//finding sibling of html
console.log(htmlElementNode.nextSibling);
//finding sibling of html and comment
console.log(htmlElementNode.nextSibling.nextSibling);

// to ignore Newline+space and directly get Element Sibling
console.log(headElementNode.nextElementSibling)
// --> kaide is toh iddhar text aana chahiye tha par Body aayega kyu ki Newline+space(text) skip ho jayega

console.log(headElementNode.childNodes);


//to get childrens
const container =document.querySelector(".container");
console.log(container.children);

/* Difference between ChildNode vs Children
--> children only gives the element child not the Newline+space etc.
--> while childNode gives all the element including Newline+space(text);
*/