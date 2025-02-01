let a = 10;// let is a block level scoped type 
var b=100; // var is a global level scoped type
const c=20;// it is bloclk leveled and value cant be furter changed after declaration

{
     let a=100
    console.log(a);
}

console.log(a);
  v=10;
  v=20;
console.log( v);
 v=90;
console.log(v);

// datatypes ---->   number , null , boolean , undefined ,string , object , bigInt ,  Symbol
let obj={
    name:"Animesh",age:18 , Height:90 
}
console.log(obj);
obj.love=false;
console.log(obj);

let obj2={
    obj:"Raja",
}
console.log(obj2);