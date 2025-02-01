let obj={
    name:"Animesh",
    surname:"Samantaray",age:18,
    height:5.8,
    weight:65
}

for( let i in obj){
    console.log(i+" --> "+obj[i]);
}

let str="Animesh Samantaray";

for(let i of str){
    process.stdout.write(i+" ");// it never gives new line 
}