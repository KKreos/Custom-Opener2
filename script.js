
window.onload = function() {
    var pack = document.getElementById("Open");
    pack.addEventListener("click", openPack);
     
     var pack = document.getElementById("YDK");
    pack.addEventListener("click", YDK);
}

function YDK() {
    alert("Fonction pas encore disponible");
}




function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max-min) + min);
}

function openPack() {

    let cardsOpened = document.getElementById("YGO-cards-opened");
    while (cardsOpened.firstChild) {
        cardsOpened.firstChild.remove();
    }
    
    for (let i =0; i < 6; i++) {    

        let cardSpan = document.createElement("span");
        cardSpan.classList.add("Yugioh-card");

        let cardImg = document.createElement("img");
        cardImg.id = i;

        let num = 1;
        const randomValue = Math.random();

        if (i == 5) {
            num = randomNumber(41, 50);
        }

        else if (i == 4) {
            if (randomValue < 0.80) {
                num = randomNumber(16, 40);
            } else if (randomValue < 0.85) {
                num = randomNumber(3, 7);
            } else if (randomValue < 0.99){
                num = randomNumber(8, 15); 
            } else {
                num = randomNumber(1, 2);
            }

       
                
            
        }

         else {
            num = randomNumber (16, 40);
        }
        

    

        
        
     
        cardImg.src = "./Custom-Pack-YGO-1/LPGD- (" + num.toString() + ").jpg";

        cardSpan.appendChild(cardImg);
        document.getElementById("YGO-cards-opened").appendChild(cardSpan);
    }
}

