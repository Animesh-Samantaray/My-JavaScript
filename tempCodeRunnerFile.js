// let key=Symbol("hyy");

// let user={
//     name:"Animesh",
//     [key]:'byy',// used symbol as obj. variable
//     age:19,
//     height:"5'5",
//     email:"animesh@AIgmail.com"
// }

// console.log(user);
// user.name="Animesh Samantaray";
// console.log(user["name"]);
// console.log(user[key]);
// Object.freeze(user);// after it , not any changes will be applied on the object :user
// user.name="Animesh ";
// console.log(user);


// let obj={};
// obj.name="Animesh";
// obj.age=18;

// let obj={
//     name:'Animesh',
//     age:19,
//     fullname : {
//         firstName:"Animesh",
//         secondName:"Samantaray"
//     }
// }
// console.log(obj.fullname.firstName);


let obj1={1:'a' , 2:'b' ,3:'c'};
let obj2={4:'d',5:'e',6:'6'};
let obj3=Object.assign(obj1,obj2);// it will give all the values of 2 objects to obj3
console.log(obj3);