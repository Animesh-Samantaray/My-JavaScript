let random=Math.random();
a=prompt("Enter value of a : ");
b=prompt("Enter value of b : ");
c=prompt("Enter operation \n (+,-,/,*): ");

obj={
     "+":"-",
     "*":"+",
     "-":"/",
     "/":"**",

}
if(random>0.1){
switch(c){
    case '+':
        alert(`${a} ${c} ${b}= ${a+b}`);
        break;

        case '-':
        alert(`${a} ${c} ${b}= ${a-b}`);
        break;

        case '/':
        alert(`${a} ${c} ${b}= ${a/b}`);
        break;

        case '*':
        alert(`${a} ${c} ${b}= ${a*b}`);
        break;
}
}
else{
      c=obj[c];
      switch(c){ 
      case '+':
        alert(`${a} ${c} ${b}= ${a+b}`);
        break;

        case '-':
        alert(`${a} ${c} ${b}= ${a-b}`);
        break;

        case '/':
        alert(`${a} ${c} ${b}= ${a/b}`);
        break;

        case '**':
        alert(`${a} ${c} ${b}= ${a**b}`);
        break;
      }
      
}

alert(eval(12 + 3));