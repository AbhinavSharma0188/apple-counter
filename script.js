let firstbasket=document.querySelector(".basket1 span");
let secondbasket=document.querySelector(".basket2 span");
let button1=document.querySelector(".left-arrow");
let button2=document.querySelector(".right-arrow");

let totalapples=10;
let seconbasketapplescount=0;
let firstbasketapplescount=totalapples-seconbasketapplescount;




firstbasket.innerText=firstbasketapplescount
secondbasket.innerText=seconbasketapplescount;
button2.addEventListener("click",()=>{
    if(firstbasketapplescount>0){
        firstbasketapplescount--;
    firstbasket.innerText=firstbasketapplescount;
    seconbasketapplescount++;
    secondbasket.innerText=seconbasketapplescount;
    
    }
    

    

})


button1.addEventListener("click",()=>{
    if(seconbasketapplescount>0){
        firstbasketapplescount++;
    firstbasket.innerText=firstbasketapplescount;
    seconbasketapplescount--;
    secondbasket.innerText=seconbasketapplescount;
    
    }
    

    

})


