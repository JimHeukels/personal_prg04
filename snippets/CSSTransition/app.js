var square;
var rotation = 0;

window.addEventListener("load", init);

function init() 
{
    console.log("Loaded");
    
    square = document.getElementsByTagName("square")[0];
	window.addEventListener("click", function(e){
		rotation += 45;
		square.style.transform = "translate("+e.pageX+"px, "+e.pageY+"px) rotate("+rotation+"deg)";	
	});  
    
}

