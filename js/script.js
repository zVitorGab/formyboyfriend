const secs = document.getElementById("div")
const sec = document.querySelector("#div div")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > sec.length - 1){
        idx = 0;
    }

    secs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);