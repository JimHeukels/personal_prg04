var Tree = (function () {
    function Tree() {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
        this.width = 414;
        this.height = 86;
        this.x = 0 - this.width;
        this.y = 100;
    }
    Tree.prototype.update = function () {
        this.x += 4;
        if (this.x > window.innerWidth)
            this.x = 0 - this.width;
        this.draw();
    };
    Tree.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Bird = (function () {
    function Bird(xpos, ypos) {
        this.div = document.createElement("bird");
        document.body.appendChild(this.div);
        this.x = xpos;
        this.y = ypos;
        this.width = 67;
        this.height = 110;
        this.draw();
    }
    Bird.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bird;
}());
var Game = (function () {
    function Game() {
        this.tree1 = new Tree();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.tree1.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map