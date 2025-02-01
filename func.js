// function run(){
//    console.log("I am running");
//    return  String(10);
// }
// console.log(typeof run());

// function generateRandomNumber(){
//     return Math.floor(Math.random()*100); // give random values under range 100
// }
// let value =generateRandomNumber();
// console.log(value)

// function print(...a){ // ... combines all the inputs into one array [rest operator]
//     console.log(a);
// }
// print("white","red","yellow");


///                            objects

// let student={
//     id:123,
//     Name:"Animesh",
//     Roll:1
   
// }

// student.college(10);

// function details(obj){
//     console.log(`Name is - ${obj.Name}`);
//     console.log(`ID is - ${obj.id}`);
// }

// let fun=function details(obj){
//     console.log(`Name is - ${obj.Name}`);
//     console.log(`ID is - ${obj.id}`);
// }
// fun(student);

// let student={
//     id:123,
//     Name:"Animesh",
//     Roll:1,
//     printDetails:function(Name){
//         console.log(` i am ---> ${this.Name}`);
//         console.log(this);
//     }
// }
// student.Name="jhon"
// student.printDetails("hyy");


    // let name="Animesh";
   // this in not applicable in a method 
   // this is applicable only for an object

// let add =(a,b,)=>{
//     return a+b;// if we use {}, we have to use the return ....... if we use() , we dont need return 
// }
// console.log(add(1,2,3,4));

(function run(){
    console.log('run');
})();
//  the ; is used to confrim that previous mehod invokation is ended successfully
((name)=>{
    console.log(`name is : ${name}`);
})('Animesh');