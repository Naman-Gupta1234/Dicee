var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6) + 1;
var randomNumber2=Math.random(); 
randomNumber2=Math.floor(randomNumber2*6) + 1;

var image=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
// or for images we can use the
// var randomImage="images/dice"+randomNumber1+".png";
// var image1= document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImage);

document.querySelector("img.img1").setAttribute("src",image[(randomNumber1) - 1]);
document.querySelector("img.img2").setAttribute("src",image[(randomNumber2)-1]);

if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="😐DRAW!!"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player 1 Wins"
}
 else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩"
}