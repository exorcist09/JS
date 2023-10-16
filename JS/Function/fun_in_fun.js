//Function inside Function

const app=()=>{
    const hello=()=>{
        console.log("hello");
    }
    const add =(n1,n2)=>{
        console.log(n1+n2);
    }
    const multi =function(m1,m2){
        console.log(m1*m2);
    }
    console.log("inside app");
    hello();
    add(4,5);
    multi(6,7);
};
app();