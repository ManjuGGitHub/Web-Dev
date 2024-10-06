var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var randomImage = "dice" + randomNumber1 +".png" // dice1.png - dice6.png

var randomSource = "./images/"+randomImage;

var image1 = document.querySelectorAll("img")[0];
 
image1.setAttribute("src", randomSource);

var randomNmber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNmber2 + ".png";

var randomSource2 = "./images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomSource2)

if (randomNumber1 === randomNmber2)
    {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
else if (randomNumber1 > randomNmber2)
    {
        document.querySelector("h1").innerHTML = "Player1 Wins!";
    }
else{
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}

