function getFirst(){
    rand = Math.random();
    if(rand<0.33){
        return "Animesh";
    }
    else if(rand<0.66){
        return "Raj";
    }
    else return "Amazing";
}

function getMiddle(){
    rand = Math.random();
    if(rand<0.33){
        return "Automobiles";
    }
    else if(rand<0.66){
        return "Bakery";
    }
    else return "Garments";
}

function getLast(){
    rand = Math.random();
    if(rand<0.33){
        return "Bros";
    }
    else if(rand<0.66){
        return "Limited";
    }
    else return "Hub";
}

prompt(`${getFirst()}  ${getMiddle()}  ${getLast()}`);