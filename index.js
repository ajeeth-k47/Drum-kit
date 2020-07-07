
var lengthOfdrum=document.querySelectorAll(".drum").length;
var j=3;
for(var i=0;i<lengthOfdrum;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
var buttonPressed=this.innerHTML;
makesound(buttonPressed);
animation(buttonPressed);
});
}
document.addEventListener('keypress',function(event)
{
makesound(event.key);
animation(event.key);
});
function makesound(key)
{
  switch(key)
  {
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare=new Audio("sounds/kick-bass.mp3");
    snare.play();
    break;
    case "k":
    var kick=new Audio("sounds/crash.mp3");
    kick.play();
    break;
    case "l":
    var crash=new Audio("sounds/snare.mp3");
    crash.play();
    break;
    default:
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  }
}
function animation(letter)
{
  document.querySelector("."+letter).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+letter).classList.remove("pressed");
  },100);
}