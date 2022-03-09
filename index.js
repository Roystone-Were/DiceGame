const randomNumber1 = Math.floor(Math.random()*6)+1;
const randomDiceImage = `images/dice${randomNumber1}.png`; //includes all immages from dice1.png to dice6.png

const image1 = document.querySelectorAll("img")[0]; //selects first <img> element which is [0]

image1.setAttribute("src",randomDiceImage); //changes attribute when run
