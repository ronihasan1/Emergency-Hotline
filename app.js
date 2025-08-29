const serviceCard = document.querySelectorAll('.service_card');
const serviceName = document.querySelectorAll('.service_name');
const serviceNumber = document.querySelectorAll('.service_number');
const loveButton = document.querySelectorAll ('.love-btn') ;
const loveCount = document.querySelector("#love-count"); 
const coinCount = document.querySelector("#count-coin"); 

const serviceCall = document.querySelectorAll("service_call") ;

const serviceList = document.getElementById("service") ; 






for(let i = 0 ; i < loveButton.length ; i++){
    loveButton[i].addEventListener("click",function(){
        const amount = parseInt(loveCount.innerText) ;
        loveCount.innerText = amount + 1 ;
    })
}



