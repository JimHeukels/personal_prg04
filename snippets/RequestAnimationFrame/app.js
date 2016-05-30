var rotation = 0;
var square;

window.addEventListener("load", init);

function init() 
{
    console.log("Loaded");
    
    square = document.getElementsByTagName("square")[0];
    
    requestAnimationFrame(gameLoop);
}

function gameLoop()
{
    rotation++;
    console.log(rotation);
    square.style.transform = "rotate("+rotation+"deg)";
    //square.style.transform = "rotateZ("+rotation+"deg) translateX("+rotation+"px)";
    
    requestAnimationFrame(gameLoop);
}