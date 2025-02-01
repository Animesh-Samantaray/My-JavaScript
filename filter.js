let arr=[1,2,3,4,5,6,7,8,9];
filterForMe=(e)=>{
    if(e==2) return true;
    else if(e==1) return false;
    let sum=0;
    for(let i=2;i<e;i++){ 
        if(e%i==0){
            sum++;
            break;
        }
    }
    if(sum==0) return true;
    else return false;
}
brr=arr.filter(filterForMe);
console.log(brr);