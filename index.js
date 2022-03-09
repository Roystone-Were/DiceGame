
// first player
const randomNumber1 = Math.floor(Math.random()*6)+1;
const randomDiceImage1 = `images/dice${randomNumber1}.png`; //includes all immages from dice1.png to dice6.png

const image1 = document.querySelectorAll("img")[0]; //selects first <img> element which is [0]

image1.setAttribute("src",randomDiceImage1); //changes attribute when run

//second player
const randomNumber2 = Math.floor(Math.random()*6)+1;
const randomDiceImage2 = `images/dice${randomNumber2}.png`;

const image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);


//changing h1 element text
const heading = document.querySelectorAll("h1")[0];

//conditions to determine winner/loser/draw
if(randomNumber1 > randomNumber2){
    heading.innerHTML= "player 1 won🎉";
}else if(randomNumber2 > randomNumber1){
    heading.innerHTML= "player 2 won🎉";
}else{heading.innerHTML= "DRAW"};


//refresh button
const btn = document.querySelector("button");

function reloading(){
    window.location.reload()
}
btn.addEventListener("click",reloading);


