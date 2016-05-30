var Bubble = (function () {
    function Bubble() {
        var div = document.createElement("bubble");
        document.body.appendChild(div);
        var startx = 100;
        var starty = 100;
        div.style.left = startx + "px";
        div.style.top = starty + "px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var div = document.createElement("fish");
        document.body.appendChild(div);
        var startx = 100;
        var starty = 100;
        var color = 45;
        div.style.left = startx + "px";
        div.style.top = starty + "px";
        div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        div.style.filter = "hue-rotate(" + color + "deg)";
    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.createFish();
        this.createBubble();
    }
    Game.prototype.createFish = function () {
        var f = new Fish();
    };
    Game.prototype.createBubble = function () {
        var b = new Bubble();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map