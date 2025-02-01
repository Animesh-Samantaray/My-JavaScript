let arr=[1,2,3,4,5];

fact=(a,b,c,d)=>{
    console.log(a +"  "+b+" "+c+" "+d);
    return a+b;
}

console.log(arr.reduce(fact,4));