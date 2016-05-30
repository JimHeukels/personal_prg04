/// <reference path="ball.ts"/>
class Game {
    
    private ball:Ball;
    private paddle:Paddle;
    
    private utils:Utils;
    
    // geef hier de ball instance een naam
    // ...

    constructor() {
        
        this.ball = new Ball();
        this.paddle = new Paddle (38, 40);
        
        // utils
        this.utils = new Utils();
           
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    // game loop
    private gameLoop(){
        this.paddle.move();
        this.ball.move();
        
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 