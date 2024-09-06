const availableOptions = [1,2,3,4,5,6];

let player1 = 6;
let player1Dicee = document.querySelector(".img1");

let player2 = 6;
let player2Dicee = document.querySelector(".img2");

let changeImageButton = document.querySelector("#changeImageBtn");
let heading = document.querySelector("h1");

function play() {
    let randIndex1 = Math.floor(Math.random() * availableOptions.length);
    player1 = availableOptions[randIndex1];
    player1Dicee.src = ("images/dice" + availableOptions[randIndex1] + ".png");

    let randIndex2 = Math.floor(Math.random() * availableOptions.length);
    player2 = availableOptions[randIndex2];
    player2Dicee.src = ("images/dice" + availableOptions[randIndex2] + ".png");

    if (player1 > player2) {
        heading.innerText = "Player 1 Winss!!";
    } else if (player1 < player2) {
        heading.innerText = "Player 2 Winss!!";
    } else {
        heading.innerText = "Its a Draw";
    }
}

changeImageButton.addEventListener('click', play);

