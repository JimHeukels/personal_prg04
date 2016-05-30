var Paddle = (function () {
    function Paddle(up, down) {
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.x = 0;
        this.y = 200;
        this.width = 25;
        this.height = 100;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Paddle.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        this.draw();
    };
    Paddle.prototype.move = function () {
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
    };
    Paddle.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = 230;
        this.y = 210;
        this.width = 40;
        this.height = 40;
        this.speedX = -3;
        this.speedY = 0;
    }
    Ball.prototype.hitPaddle = function () {
        this.speedX *= -20;
        this.speedY *= -10;
    };
    Ball.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > window.innerWidth || this.x < -40) {
            document.getElementsByTagName("ui")[0].innerHTML = "Resetting ball";
            this.x = 230;
            this.y = 210;
            this.speedX = -3;
        }
        if (this.y + 40 > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        this.draw();
    };
    Ball.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.paddle = new Paddle(38, 40);
        this.paddle2 = new Paddle(87, 83);
        this.ball = new Ball();
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.paddle.move();
        this.paddle2.move();
        var hit = this.utils.hasOverlap(this.ball, this.paddle);
        if (hit) {
            document.getElementsByTagName("ui")[0].innerHTML = "PADDLE ONE IS KILL!";
            this.ball.hitPaddle();
        }
        var hit2 = this.utils.hasOverlap(this.ball, this.paddle2);
        if (hit) {
            document.getElementsByTagName("ui")[0].innerHTML = "PADDLE TWO IS DED!";
            this.ball.hitPaddle();
        }
        this.ball.update();
        this.paddle.update();
        this.paddle2.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.hasOverlap = function (c1, c2) {
        return !(c2.x > c1.x + c1.width || c2.x + c2.width < c1.x || c2.y > c1.y + c1.height || c2.y + c2.height < c1.y);
    };
    return Utils;
}());
//# sourceMappingURL=main.js.map