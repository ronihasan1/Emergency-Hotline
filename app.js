const serviceCard = document.querySelectorAll('.service_card');
const serviceName = document.querySelector('.service_name');
const serviceNumber = document.querySelector('.service_number');
const loveButton = document.querySelectorAll ('.love-btn');


const coinCount = document.querySelector("#count-coin"); 

const serviceCall = document.querySelectorAll("service_call") ;

const serviceList = document.getElementById("service") ; 

// love 
let coinAmount = 0 ;
const coin = document.querySelectorAll(".love-btn") ;
const loveCoin = document.getElementById("love-count");
loveCoin.innerHTML = coinAmount ; 

for(let b = 0 ; b < coin.length ; b++){
    coin[b].addEventListener("click",function(){
        coinAmount++
        loveCoin.innerHTML = coinAmount ; 
    })
}


// copy
let copyNumber = 0;
const copy = document.querySelectorAll(".service_copy");
const copyCount = document.getElementById("copy-text");

copyCount.innerHTML = copyNumber;

for (let i = 0; i < copy.length; i++) {
    copy[i].addEventListener("click", function () {
    alert("copy")
    let copynum = serviceNumber.innerText ;
    navigator.clipboard.writeText(copynum);
    copyNumber++ ;
    copyCount.innerHTML = copyNumber ; 
    });

}


// call 
let number = 100;
const numberClass = document.querySelectorAll (".service_call") ;
const service = document.getElementById ("count-coin") ;
service.innerHTML = number ; 

for(let i = 0 ; i < numberClass.length ; i ++ ){
    numberClass[i].addEventListener("click",function(){
        alert('hello') ;
        number = number - 20 ;
        service.innerHTML = number ;

        let numberconvert = serviceNumber.innerHTML ;
        let copyname = serviceName.innerHTML ;
        

        const li = document.createElement("li") ;
         li.classList.add("flex", "justify-between" , "items-center" , "p-4" ,"bg-[#fafafa]" , "rounded-lg" ,"mb-7")
        const div = document.createElement("div");

        const h1 = document.createElement("h1") ;
        h1.classList.add('text-2', 'font-bold', 'mb-1')
        h1.innerHTML= copyname ;

        const p = document.createElement("p") ;
        p.innerHTML = numberconvert ;
        
        const span = document.createElement("span") ;
        const timezone = new Date() ;
        span.innerHTML = timezone.toLocaleString(); 
        
        div.appendChild(h1)
        div.appendChild(p)
        li.appendChild(div);
        li.appendChild(span)
        serviceList.appendChild(li);

        if(number < 20){
            alert("apnar tk nei")
            return ;

        }
        
    })
}

const clearButton = document.getElementById('clear-btn') ;
clearButton.addEventListener("click",function(){
    serviceList.innerText = '';
})

