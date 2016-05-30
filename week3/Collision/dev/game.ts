/// <reference path="ball.ts"/>
class Game {
    
    private ball:Ball;
    private paddle:Paddle;
    private paddle2:Paddle;
    
    private utils:Utils;
    
    constructor() {
        
        this.paddle = new Paddle(38, 40);
        this.paddle2 = new Paddle(87, 83);
        this.ball = new Ball();
        
        // utils
        this.utils = new Utils();
                
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));    
    }
    
    // game loop
    private gameLoop():void{
        this.paddle.move();
        this.paddle2.move();
        
        
        // hier checken of de ball de linker paddle raakt
        let hit = this.utils.hasOverlap(this.ball, this.paddle);
        if(hit){
            document.getElementsByTagName("ui")[0].innerHTML = "PADDLE ONE IS KILL!";
            this.ball.hitPaddle();
        }
        
        let hit2 = this.utils.hasOverlap(this.ball, this.paddle2);
        if(hit){
            document.getElementsByTagName("ui")[0].innerHTML = "PADDLE TWO IS DED!";
            this.ball.hitPaddle();
        }
        
        // ball en paddle updaten
        this.ball.update();
        this.paddle.update();
        this.paddle2.update();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
} 