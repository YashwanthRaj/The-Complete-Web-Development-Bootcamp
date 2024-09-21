// Sample

// let sound = new Audio('sounds/crash.mp3');
// function handleClick() {
//     // alert("Button clicked!!");
//     sound.play();
// }

// This will select the first button in the document and then if its clicked will return the function. 
// let button = document.querySelector("button");  

// We are adding event listeners to all the buttons
// let buttons = document.querySelectorAll(".drum");
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", handleClick);
// }

// Sample Code to learn how to play a sound on click of a button
// let button = document.querySelector("button");
// button.addEventListener("click", handleClick);


// Main Code

// Sounds
var wAudio = new Audio('sounds/tom-1.mp3')
var aAudio = new Audio('sounds/tom-2.mp3')
var sAudio = new Audio('sounds/tom-3.mp3')
var dAudio = new Audio('sounds/tom-4.mp3')
var jAudio = new Audio('sounds/snare.mp3')
var kAudio = new Audio('sounds/crash.mp3')
var lAudio = new Audio('sounds/kick-bass.mp3')

// Function to make sound
function handleClick(key) {
    // if (key == 'w') {
    //     wAudio.play();
    // } else if (key == 'a') {
    //     aAudio.play();
    // } else if (key == 's') {
    //     sAudio.play();
    // } else if (key == 'd') {
    //     dAudio.play();
    // } else if (key == 'j') {
    //     jAudio.play();
    // } else if (key == 'k') {
    //     kAudio.play();
    // } else if (key == 'l') {
    //     lAudio.play();
    // } 

    switch(key) {
        case 'w':
            wAudio.play();
            break;
        case 'a':
            aAudio.play();
            break;
        case 's':
            sAudio.play();
            break;
        case 'd':
            dAudio.play();
            break;
            break;
        case 'j':
            jAudio.play();
            break;
        case 'k':
            kAudio.play();
            break;
        case 'l':
            lAudio.play();
            break;

        default:  // This will be triggered when the key does not match with any of the other cases
            console.log(key);  // Its a good practice to log the key that triggered default case
    }
}

//Function to add animation when the key is pressed
function addAnimation(key) {
    let activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100)
}

let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        handleClick(this.innerHTML);
        addAnimation(this.innerHTML);
    })
}

// Adding keyboard keys as input
document.addEventListener("keypress", function (event) {
    handleClick(event.key);
    addAnimation(event.key);
})