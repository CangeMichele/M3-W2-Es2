console.log("ciao");


function openClose(idButton) {    
    const clickedButton = document.querySelector("#" + idButton);
    if(clickedButton.textContent === "apri"){
        clickedButton.textContent = "chiudi";
    } else if (clickedButton.textContent ==="chiudi"){
        clickedButton.textContent = "apri"
        console.log(clickedButton.textContent);
    }
    
}

