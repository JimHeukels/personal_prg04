//
// OPDRACHT
//
// 1
// VOEG VIA JAVASCRIPT EEN VIS EN EEN BUBBLE TOE
// ZET DE VIS OP EEN WILLEKEURIGE PLEK IN HET SCHERM MET EEN WILLEKEURIGE KLEUR
// ZET DE BUBBLE OP EEN WILLEKEURIGE X POSITIE

// 2
// MAAK EEN FOR LOOP DIE 50 VISJES EN BUBBLES TOEVOEGT. DEZE MOETEN ALLEMAAL ANDERS ZIJN!

// 3
// GEBRUIK NU SETTIMOUT OF SETINTERVAL OM NIEUWE VISJES EN BUBBLES TE PLAATSEN

// 4
// PLAATS EEN TITEL EN START KNOP. ALS JE OP START KLIKT VERDWIJNEN DE TITEL EN KNOP, EN 
// DAARNA WORDEN PAS DE VISJES GETEKEND

// 5 
// HANG EEN CLICK EVENT LISTENER AAN ELK VISJE. ALS GEKLIKT WORDT
// GEEF JE DE GEKLIKTE VIS EEN NIEUWE CLASS DIE EEN ANDERE ACHTERGROND HEEFT 
// fish.classList.add(".deadfish");


function startGame(){
    var fish = document.getElementsByTagName("fish")[0];

    // demo code : verander basis positie
    fish.style.left = "150px";
    fish.style.top = "150px";

    // demo code : verander kleur
    fish.style.webkitFilter = "hue-rotate(45deg)";
    fish.style.filter = "hue-rotate(45deg)";

    // demo code : verander basis positie
    var bubble = document.getElementsByTagName("bubble")[0];
    bubble.style.left = "60px";
    bubble.style.top = "0px";
}

//
// start the game on window load
//

window.addEventListener("load", function () {
    startGame();
});
