let counter1=document.getElementById("counter")
function increment(){
    let p=parseInt(counter1.textContent);
    let u=p+1;
    if (u>0){
        counter1.style.color="green"
    }
    else{
        counter1.style.color="blue"
    }
    counter1.textContent=u
}
function decrement(){
    let p=parseInt(counter1.textContent);
    let u=p-1;
    if (u<0){
        counter1.style.color="blue"
    }
    else{
        counter1.style.color="green"
    }
    counter1.textContent=u
}
function reset(){
    let a=0;
    counter.textContent=a;
    counter1.style.color="yellow"
}