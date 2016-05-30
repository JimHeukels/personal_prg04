var Game = (function () {
    function Game() {
        this.showStartScreen();
    }
    Game.prototype.showStartScreen = function () {
        this.screen = new StartScreen(this);
    };
    Game.prototype.showGameScreen = function () {
        this.screen = new GameScreen(this);
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Trunk = (function () {
    function Trunk(s) {
        this.screen = s;
        this.div = document.createElement("tree");
        this.screen.div.appendChild(this.div);
        this.width = 414;
        this.height = 86;
        this.x = 0 - this.width;
        this.y = 100;
    }
    Trunk.prototype.update = function () {
        this.x += 7;
        if (this.x > window.innerWidth) {
            this.screen.onGameOver();
        }
        this.draw();
    };
    Trunk.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Trunk;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        this.game = g;
        this.div = document.createElement("screen");
        document.body.appendChild(this.div);
        var btn = document.createElement("gamebutton");
        this.div.appendChild(btn);
        btn.innerHTML = "START DE GAME!";
        btn.addEventListener("click", this.onStartClick.bind(this));
    }
    StartScreen.prototype.onStartClick = function () {
        this.div.remove();
        this.game.showGameScreen();
    };
    return StartScreen;
}());
var GameScreen = (function () {
    function GameScreen(g) {
        this.gameover = false;
        this.game = g;
        this.div = document.createElement("screen");
        document.body.appendChild(this.div);
        this.tree = new Trunk(this);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    GameScreen.prototype.onGameOver = function () {
        this.div.remove();
        this.gameover = true;
        this.game.showStartScreen();
    };
    GameScreen.prototype.gameLoop = function () {
        this.tree.update();
        if (!this.gameover)
            requestAnimationFrame(this.gameLoop.bind(this));
    };
    return GameScreen;
}());
//# sourceMappingURL=main.js.map