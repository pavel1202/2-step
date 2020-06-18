
let maxRate = 5;

for(let i= 0;i<document.getElementsByClassName('rate__conteiner').length;i++)
    rate(document.getElementsByClassName('rate__conteiner')[i]);


function rate(rateDOM){
    let defaultRate = rateDOM.attributes.name.nodeValue;
    let starsDOM;
    for(let i = 0;i<defaultRate;i++)
        rateDOM.innerHTML += '<img class="rate__star" src="./img/star-active.svg" alt=star>'
    for(let i = defaultRate;i < maxRate;i++)
        rateDOM.innerHTML += '<img class="rate__star" src="./img/star.svg" alt=star>'
    starsDOM = rateDOM.getElementsByClassName('rate__star');
    rateDOM.onclick = (event)=>{
        for(let a = 0;a<starsDOM.length;a++){
            if(event.target == starsDOM[a]){
                rateDOM.innerHTML = '';
                for(let i = 0;i<a+1;i++)
                    rateDOM.innerHTML += '<img class="rate__star" src="./img/star-active.svg" alt=star>'
                for(let i = a+1;i < maxRate;i++)
                    rateDOM.innerHTML += '<img class="rate__star" src="./img/star.svg" alt=star>'
                break;
            }
        }
    }
}


