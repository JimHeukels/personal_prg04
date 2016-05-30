window.addEventListener("load", initApp);



var startButton;
var messageDiv;
var kartsFinished;


function initApp() {
	// de startknop tonen
	messageDiv = document.getElementById("message");
    startButton = document.getElementById("start");
    startButton.addEventListener("click", driveKarts);
    startApp();
}

function startApp() {
	kartsFinished = 0;
	

	// start posities van de karts en de startknop
	TweenLite.set("#start", {y:-200});
	TweenLite.set(".kart", {x:20});

	// de startknop tonen
    TweenLite.to(startButton, 0.5, {y:20});
}

function driveKarts(){
	messageDiv.innerHTML = "";

	TweenLite.to(startButton, 0.5, {y:-200});

    console.log("start!");
	TweenLite.to("#mario", 2+Math.random()*3, {x:window.innerWidth - 200, onComplete:checkWinner, onCompleteParams:["mario"]});
	TweenLite.to("#luigi", 2+Math.random()*3, {x:window.innerWidth - 200, onComplete:checkWinner, onCompleteParams:["luigi"]});
	TweenLite.to("#peach", 2+Math.random()*3, {x:window.innerWidth - 200, onComplete:checkWinner, onCompleteParams:["peach"]});
	TweenLite.to("#toad", 2+Math.random()*3, {x:window.innerWidth - 200, onComplete:checkWinner, onCompleteParams:["toad"]});
}

function checkWinner(kart){
	
	if(kartsFinished == 0){
		messageDiv.innerHTML = kart + " is the winner!";
	}

    kartsFinished++;
    if(kartsFinished == 4){
       	startApp();
    }
}