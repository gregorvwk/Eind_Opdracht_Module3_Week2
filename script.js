// DOM

let btnBlue = document.getElementById("blue");
let btnRed = document.getElementById("red");
let btnYellow = document.getElementById("yellow");
let btnGreen = document.getElementById("green");
let background = document.getElementById("background");
let main = document.getElementById("main");
let image = document.getElementById("images");
let btnWhite = document.getElementById("normal");

// functions
let blue = function(){
    background.className = "background-blue";
    main.className = "";
}
let red = function(){
    background.className = "background-red";
    main.className = "";
}
let yellow = function(){
    background.className = "background-yellow";
    main.className = "";
}
let green = function(){
    background.className = "background-green";
    main.className = "";
}
let white = function(){
    background.className = "";
    main.className = "";
}

// menu change

image.addEventListener("click", function(){
    if (main.className == "images"){
        main.className = "";
    } else {
        main.className = "images";
    }
})

// color change

btnBlue.addEventListener("click", blue);
btnRed.addEventListener("click", red);
btnYellow.addEventListener("click", yellow);
btnGreen.addEventListener("click", green);
btnWhite.addEventListener("click", white);
