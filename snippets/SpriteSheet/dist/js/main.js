var Background = (function () {
    function Background(ctx) {
        this.context = ctx;
        this.image = new Image();
        this.image.src = 'images/sea.png';
    }
    Background.prototype.draw = function () {
        this.context.drawImage(this.image, 0, 0, 800, 600);
    };
    return Background;
}());
var Battleship = (function () {
    function Battleship(ctx) {
        var _this = this;
        this.directionX = 0;
        this.directionY = 0;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.frameWidth = 161;
        this.frameHeight = 161;
        this.currentFrame = 0;
        this.animationY = 0;
        this.animationSpeed = 0;
        this.timer = 0;
        this.context = ctx;
        this.image = new Image();
        this.image.src = 'images/battleship.png';
        this.directionX = 0;
        this.directionY = 0;
        this.speed = 3;
        this.currentFrame = 0;
        this.animationSpeed = 20;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Battleship.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = -1;
                this.animationY = 3;
                break;
            case 39:
                this.directionX = 1;
                this.animationY = 2;
                break;
            case 40:
                this.directionY = 1;
                this.animationY = 0;
                break;
            case 37:
                this.directionX = -1;
                this.animationY = 1;
                break;
        }
    };
    Battleship.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = 0;
                break;
            case 39:
                this.directionX = 0;
                break;
            case 40:
                this.directionY = 0;
                break;
            case 37:
                this.directionX = 0;
                break;
        }
    };
    Battleship.prototype.move = function () {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    };
    Battleship.prototype.draw = function () {
        this.timer++;
        if (this.timer % this.animationSpeed == 0)
            this.currentFrame++;
        if (this.currentFrame > 3)
            this.currentFrame = 0;
        this.context.drawImage(this.image, this.currentFrame * this.frameWidth, this.animationY * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, 161, 161);
    };
    return Battleship;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');
        this.context.fillStyle = "#0099ff";
        this.battleship = new Battleship(this.context);
        this.background = new Background(this.context);
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.update = function () {
        this.battleship.move();
        this.draw();
    };
    Game.prototype.draw = function () {
        var _this = this;
        this.context.clearRect(0, 0, 800, 600);
        this.background.draw();
        this.battleship.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map