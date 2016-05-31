/// <reference path="ball.ts"/>
class Game {
    
    private ball:Ball;
    private paddle:Paddle;
    
    constructor() {
        
        this.paddle = new Paddle();
        this.ball = new Ball();
                        
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    // game loop
    private gameLoop():void{
        // hier checken of de ball een paddle raakt
        let ballbounds:Rectangle = this.ball.getBounds();
        let paddlebounds:Rectangle = this.paddle.getBounds();
        
        let hit = ballbounds.hitsOtherRectangle(paddlebounds);
        if(hit){
            this.ball.hitPaddle();
            document.getElementsByTagName("ui")[0].innerHTML = "HIT PADDLE!";
        }
        
        // ball en paddle updaten
        this.ball.update();
        this.paddle.update();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
} 