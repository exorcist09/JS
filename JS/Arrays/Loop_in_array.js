const fruits =["apple","banana","grapes"]


//Standard For-Loop
for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}


//While loop
let i=0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

//for-of loop ==> directly gives an element
for(let fruit of fruits){
    console.log(fruit);
}

//for-in loop ==> gives direclty the index
for(let i in fruits){
    console.log(i);
}