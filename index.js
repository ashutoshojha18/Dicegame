//for first dice image.

var randomNumber1 = Math.floor(Math.random() * 6)+1;  // to create a random number from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // from dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //for images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //select img for first dice.

image1.setAttribute("src", randomImageSource); //set attribute for changing image source.

//for second dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// for title

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "✔ Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! ✔ ";
}
else{
    document.querySelector("h1").innerHTML = "✖ oops Draw!";
}