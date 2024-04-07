function openClose(idButton) {    
    const clickedButton = document.querySelector("#" + idButton);
    if(clickedButton.textContent === "apri"){
        clickedButton.textContent = "chiudi";
    } else if (clickedButton.textContent ==="chiudi"){
        clickedButton.textContent = "apri"
    }
    
}

function contaViaggi(){
let contViaggi = document.getElementById("container-viaggi")
let imgViaggi = contViaggi.getElementsByTagName("img");
let nViaggi = imgViaggi.length;
alert("Nel sito sono disponibili " + nViaggi + " viaggi");
}

function allCards() {
    let cardElements = document.getElementsByClassName('card');
    console.log(cardElements);
    for(i=0; i<cardElements.length; i++){
        if(cardElements[i].className.includes('d-none')){
            cardElements[i] = cardElements[i].classList.remove('d-none');
        } else {
            cardElements[i] =cardElements[i].classList.add('d-none');
        }
    }

    buttonAllCard= document.querySelector("#allCards");
    if(buttonAllCard.textContent === "apri tutte le card"){
        buttonAllCard.textContent = "chiudi tutte le card";
    } else if (buttonAllCard.textContent ==="chiudi tutte le card"){
        buttonAllCard.textContent = "apri tutte le card"
    }
  
    
}