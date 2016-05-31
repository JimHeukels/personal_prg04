var Car = (function () {
    function Car(l) {
        this.level = l;
        this.div = document.createElement("car");
        this.level.div.appendChild(this.div);
        this.x = -168;
        this.y = 300;
        this.width = 168;
        this.height = 108;
    }
    Car.prototype.update = function () {
        this.x += 2;
    };
    Car.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Car;
}());
var Player = (function () {
    function Player(l) {
        this.level = l;
        this.div = document.createElement("player");
        this.level.div.appendChild(this.div);
        this.x = 400;
        this.y = 640;
        this.width = 61;
        this.height = 102;
    }
    Player.prototype.update = function () {
    };
    Player.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
var Truck = (function () {
    function Truck(l) {
        this.level = l;
        this.div = document.createElement("truck");
        this.level.div.appendChild(this.div);
        this.x = -280;
        this.y = 80;
        this.width = 281;
        this.height = 155;
    }
    Truck.prototype.update = function () {
        this.x++;
    };
    Truck.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Truck;
}());
var Level = (function () {
    function Level(g) {
        this.game = g;
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.car = new Car(this);
        this.player = new Player(this);
        this.truck = new Truck(this);
    }
    Level.prototype.update = function () {
        this.car.update();
        this.player.update();
        this.truck.update();
    };
    Level.prototype.draw = function () {
        this.car.draw();
        this.player.draw();
        this.truck.draw();
    };
    return Level;
}());
var Game = (function () {
    function Game() {
        this.score = 0;
        this.level = new Level(this);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.updateScore = function (i) {
        this.score += i;
    };
    Game.prototype.gameLoop = function () {
        this.level.update();
        this.level.draw();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map