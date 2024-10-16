let start=document.querySelector("#start")
let stop=document.querySelector("#stop")
let body=document.querySelector("body")

let IntervalID
const letters="0123456789ABCDEF"


start.addEventListener('click', function(e){
    body.setAttribute('autofocus','')
    start.style.visibility="hidden"
    document.querySelector(".message").innerHTML=`Press any key to stop`
    if(!IntervalID){
        IntervalID=setInterval(() => {
            let randomColor=""
            for(let i=0;i<6;i++){
                let letter=Math.floor(Math.random()*16)
                randomColor+=letters[letter]
            }

            console.log(randomColor)
            body.style.backgroundColor=`#${randomColor}`
            document.querySelector(".result").textContent=`#${randomColor}`
        }, 1000);
    }
})

window.addEventListener('keydown', function(e){
    clearInterval(IntervalID)
    IntervalID=null
    start.style.visibility=""
    document.querySelector(".message").innerHTML=`Press start to change colors`
})