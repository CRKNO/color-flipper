const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //Hexadecimal characters.

const colorSpan = document.querySelector("span");
const bodyElement = document.querySelector("body");
const flipperButton = document.querySelector("button");

function colorFlip(){
    let hexCode = "#";

    for(let i = 0; i < 6; i++){ 
        let char = Math.floor(Math.random()*(16)); //Random number between 0 and 15.
        hexCode = hexCode + hex[char]; // Concatenates the characters.
    }
    colorSpan.innerHTML = hexCode;
    bodyElement.style.backgroundColor = hexCode;
}

flipperButton.addEventListener("click", ()=>{
    colorFlip();
});

