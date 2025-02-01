let arr=[1,2,3,4,5];
console.log(arr);
len=arr.length;
arr.push(6);
arr.push(7);
arr.push(8);//adds elemet to the ending of the array 
arr.pop();//removes element from ending
arr.shift();// it will remove element from starting like pop
arr.unshift("Animesh");// adds element to the starting of the array 
console.log(arr);
delete(arr[4]);
console.log(arr)
brr=[10,20,30,40];
crr=[100,200,300];
console.log(arr.concat(brr));
console.log(arr);
let nrr=[1,2,3,4,5];
console.log(nrr.slice(2));//from 3 index to end all are returned 
console.log(nrr.slice(2,4));//from 3 to 4 

// loops used is for in

// for (let i in nrr){
// console.log(nrr[i]);
// }

obj={
    name:"Animesh",
    Class:"12th",
    age:18,
    isGood : true
}

for(let i in obj){  // for of is used to iterate inside a object 
console.log(`${i} : ${obj[i]}`);
}