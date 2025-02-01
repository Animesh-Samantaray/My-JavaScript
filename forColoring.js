let val=document.getElementsByClassName(".box");
let i=0;
val.forEach(e=>{
    switch(i){
        case 0:
            e.style.backgroundColor="green";
            i++;
            break;
            

        case 1:
            e.style.backgroundColor="yellow";
            i++;
            break;

            case 2:
                e.style.backgroundColor="red";
                i++;
                break;

                case 3:
                    e.style.backgroundColor="grey";
                    i++;
                    break;

                    case 4:
                        e.style.backgroundColor="orange";
                        i++;
                        break;
    }
})