/// <reference path="level.ts"/>

class Game {
    
    private score:number = 0;   
    private level:Level;
     
    constructor() {
        this.level = new Level(this);
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    public updateScore(i:number){
        this.score += i;
    }
    
    private gameLoop(){
        
        this.level.update();
        this.level.draw();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 

