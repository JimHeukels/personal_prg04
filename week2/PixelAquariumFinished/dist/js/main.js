var Bubble = (function () {
    function Bubble() {
        var div = document.createElement("bubble");
        document.body.appendChild(div);
        var startx = (Math.random() * window.innerWidth);
        div.style.left = startx + "px";
        div.style.top = "0px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var div = document.createElement("fish");
        document.body.appendChild(div);
        var startx = (Math.random() * window.innerWidth);
        var starty = (Math.random() * window.innerHeight);
        div.style.left = startx + "px";
        div.style.top = starty + "px";
        var color = Math.random() * 360;
        div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        div.style.filter = "hue-rotate(" + color + "deg)";
    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.numelements = 0;
        this.timeid = setInterval(this.createElements.bind(this), 50);
    }
    Game.prototype.createElements = function () {
        var f = new Fish();
        var b = new Bubble();
        this.numelements++;
        if (this.numelements > 100) {
            clearInterval(this.timeid);
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map