let val="Animesh";
val=val.toUpperCase();
console.log(val);
val=val.toLowerCase();
console.log(val);
console.log(`Lenght of string = ${val.length}`); 
let val1=val.slice(1,5);// range 1->5-1
console.log(val1);// 1 inclusive , 5 exclusive
console.log(val.slice(3));/// 3 to the last , allla are included
console.log(val.replace("an","1"));
console.log(val1.concat(val));
let ans= "    Animesh    ";
ans1=ans.trim();// removes all the leading whitespaces
console.log(ans1.length);
console.log(ans.charAt(5));
console.log(ans.indexOf('p'));// -1 if not present 
let marvel=["IronMan","Hulk","Thor"]
let dc=["Wonder Woman","super Man"]
let arrays=[...marvel,...dc] /// it will add all the elements of the arrays into the new array
console.log(arrays);
let arr = [1,2,3,4,[5,6,[7,[8,9]]]];
let newArr = arr.flat(Infinity);
console.log(newArr);
let a=10,b=20,c=30,d=40;
ans=Array.of(a,b,c,d);
console.log(ans);
