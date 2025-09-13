
window.onload = function() {
    var pack = document.getElementById("Open");
    pack.addEventListener("click", openPack);
     var pack = document.getElementById("View");
    pack.addEventListener("click", view);
     var pack = document.getElementById("YDK");
    pack.addEventListener("click", view);
}

function YDK() {
    alert("Fonction pas encore disponible");
}

function view() {
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
        /*
            <span class="Yugioh-card">
                <img id="0" src="./Custom-Pack-YGO-1/LPGD- (5).jpg">
            </span>
            
        */
        let cardSpan = document.createElement("span");
        cardSpan.classList.add("Yugioh-card");

        let cardImg = document.createElement("img");
        cardImg.id = i;

        let num = 1;
        if (i == 5) {
            num = randomNumber(41, 50);
        }
        else {
            num = randomNumber (1, 40);  
           
        }
        
     
        cardImg.src = "./Custom-Pack-YGO-1/LPGD- (" + num.toString() + ").jpg";

        cardSpan.appendChild(cardImg);
        document.getElementById("YGO-cards-opened").appendChild(cardSpan);
    }
}
